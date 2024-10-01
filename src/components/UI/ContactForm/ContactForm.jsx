import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './ContactForm.module.css';
import {useTranslation} from "react-i18next";

const ContactForm = () => {
    const {t} = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Отправка формы через EmailJS
        emailjs.send('service_qwsq4ye', 'template_3jnm90i', formData, 'XexHPSdL26BivfwV8')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Сообщение отправлено!');
            })
            .catch((error) => {
                console.log('FAILED...', error);
                alert('Ошибка отправки!');
            });
    };

    return (
        <form className={styles.linksForm} onSubmit={handleSubmit}>
            <div className={styles.heading}>{t('links__heading')}</div>
            <div className={styles.field}>
                <label htmlFor="name" className={styles.label}>{t('links__name-head')}</label>
                <input id="name" type="text" name="name" required className={styles.input}
                       placeholder={t('links__name')} value={formData.name} onChange={handleChange}/>
            </div>
            <div className={styles.field}>
                <label htmlFor="contact" className={styles.label}>{t('links__contact-head')}</label>
                <input id="contact" type="text" name="contact" required className={styles.input}
                       placeholder={t('links__contact')} value={formData.contact} onChange={handleChange}/>
            </div>
            <div className={styles.field}>
                <label htmlFor="describe" className={styles.label}>{t('links__describe-head')}</label>
                <textarea id="message" name="message" className={`${styles.input} ${styles.input_comment}`}
                          placeholder={t('links__describe')} value={formData.message} onChange={handleChange}/>
            </div>
            <div className={`${styles.submit} cursorPointer`}>
                <input type="submit" className={styles.submitInput} value={t('submit')}/>
            </div>
        </form>
    );
};

export default ContactForm;
