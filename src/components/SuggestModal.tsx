import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { CATEGORIES } from '../types/timeline';

interface SuggestModalProps {
  onClose: () => void;
}

export default function SuggestModal({ onClose }: SuggestModalProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mppareae', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('idle');
        alert("Une erreur s'est produite lors de l'envoi. Assurez-vous d'avoir validé votre adresse email sur Formspree !");
      }
    } catch (error) {
      setStatus('idle');
      alert("Erreur de connexion. Veuillez réessayer.");
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content animate-scale-in" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>

        {status === 'success' ? (
          <div className="empty-state" style={{ padding: '60px 32px' }}>
            <div className="empty-state-icon" style={{ fontSize: 0 }}>
              <svg viewBox="0 0 24 24" width="72" height="72" shapeRendering="crispEdges" style={{ filter: 'drop-shadow(0px 8px 16px rgba(0,0,0,0.3))' }}>
                {/* Big Sparkle */}
                <g fill="#ffce00">
                  <rect x="7" y="3" width="2" height="4" />
                  <rect x="5" y="7" width="6" height="2" />
                  <rect x="1" y="9" width="14" height="2" />
                  <rect x="5" y="11" width="6" height="2" />
                  <rect x="7" y="13" width="2" height="4" />
                  <rect x="6" y="8" width="4" height="4" />
                </g>
                <rect x="7" y="9" width="2" height="2" fill="#fff" opacity="0.8" />
                
                {/* Small Sparkle */}
                <g fill="#ff9906">
                  <rect x="16" y="2" width="2" height="2" />
                  <rect x="15" y="4" width="4" height="2" />
                  <rect x="13" y="6" width="8" height="2" />
                  <rect x="15" y="8" width="4" height="2" />
                  <rect x="16" y="10" width="2" height="2" />
                  <rect x="15" y="5" width="4" height="4" />
                </g>
                <rect x="16" y="6" width="2" height="2" fill="#fff" opacity="0.6" />
                
                {/* Tiny Particle */}
                <rect x="18" y="14" width="2" height="2" fill="#ffce00" />
              </svg>
            </div>
            <h3 className="empty-state-title">Merci pour ta suggestion !</h3>
            <p className="empty-state-desc">
              L'événement a bien été envoyé. Il sera vérifié avant d'être ajouté à LA TIMELINE.
            </p>
            <button className="btn btn-ghost" onClick={onClose} style={{ marginTop: 24 }}>
              Fermer
            </button>
          </div>
        ) : (
          /* 
            Pour envoyer un email sans exposer ton adresse et sans popup navigateur,
            tu dois utiliser un service gratuit comme Formspree.io. 
            Crée un compte, et remplace l'URL ci-dessous par celle qu'ils te donnent.
          */
          <form
            className="suggest-form"
            onSubmit={handleSubmit}
          >
            <h2>Suggérer un événement</h2>
            <p>
              Tu connais un événement marquant qui manque à la timeline ? Propose-le ici.
            </p>

            <div className="form-group">
              <label className="form-label">Titre de l'événement</label>
              <input
                type="text"
                name="title"
                className="form-input"
                placeholder="Ex: Polémique XYZ..."
                required
              />
            </div>

            <div style={{ display: 'flex', gap: 16 }}>
              <div className="form-group" style={{ flex: 1 }}>
                <label className="form-label">Date (Mois / Année)</label>
                <input
                  type="text"
                  name="date"
                  className="form-input"
                  placeholder="Ex: Été 2024"
                  required
                />
              </div>

              <div className="form-group" style={{ flex: 1 }}>
                <label className="form-label">Catégorie</label>
                <select name="category" className="form-select" required>
                  <option value="">Choisir une catégorie...</option>
                  {CATEGORIES.map((c) => (
                    <option key={c.id} value={c.label}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Description / Contexte</label>
              <textarea
                name="description"
                className="form-textarea"
                placeholder="Que s'est-il passé exactement ?"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Sources (Liens utiles)</label>
              <input
                type="text"
                name="sources"
                className="form-input"
                placeholder="Liens Twitter, YouTube, Articles..."
              />
            </div>

            <div className="form-actions">
              <button type="button" className="btn btn-ghost" onClick={onClose}>
                Annuler
              </button>
              <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Envoi en cours...' : 'Envoyer la suggestion'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
