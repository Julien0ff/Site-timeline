import { useState } from 'react';
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

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content animate-scale-in" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>

        {status === 'success' ? (
          <div className="empty-state" style={{ padding: '60px 32px' }}>
            <div className="empty-state-icon">✨</div>
            <h3 className="empty-state-title">Merci pour ta suggestion !</h3>
            <p className="empty-state-desc">
              L'événement a bien été envoyé. Il sera vérifié avant d'être ajouté à LA TIMELINE.
            </p>
            <button className="btn btn-primary" onClick={onClose} style={{ marginTop: 24 }}>
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
