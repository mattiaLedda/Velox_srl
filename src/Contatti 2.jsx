import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer2 from './Footer2';
import emailjs from 'emailjs-com';


const ContactForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_147bt86', 'template_pjh72rp', e.target, 'M0CZUsugsZWNAcGKp')
        .then((result) => {
            console.log(result.text);
            // Aggiungi qui eventuali azioni post-invio, come mostrare un messaggio di successo
        }, (error) => {
            console.log(error.text);
            // Gestisci qui eventuali errori di invio
        });
    };
    

    return (
        <div>
            <Header title="CONTATTACI"/>
        <div className="contactcont">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    <div className="my-4">
                        <h2 className="text-center">Informazioni Azienda</h2>
                        <ul className="list-group">
                            <li className="list-group-item"><strong>Nome:</strong> Nome Azienda Srl</li>
                            <li className="list-group-item"><strong>Sede:</strong> Via Esempio, 123, Città, Stato</li>
                            <li className="list-group-item"><strong>Email:</strong> info@azienda.it</li>
                            <li className="list-group-item"><strong>Telefono:</strong> +39 0123 456789</li>
                        </ul>
                    </div>
                    <div className="my-4">
                        <h2 className="text-center">Contattaci</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" name="from-name" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Oggetto</label>
                                <input type="text" className="form-control" name="subject" value={formData.subject} onChange={handleChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Messaggio</label>
                                <textarea className="form-control" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Invia</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <Footer2/>
        </div>
    );
}

export default ContactForm;
