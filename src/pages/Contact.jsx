
import { useState } from 'react'

const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const handleOnchange = (event) => {
        const { name, value } = event.target
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSendEmail = async (event) => {
        event.preventDefault()

        const response = await fetch('/api/server', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: form.name,
                email: form.email,
                subject: form.subject,
                message: form.message,
            }),
        })

        const data = await response.json()
        console.log(data)
    }

    return (
        <main className="simple-page">
            <h1>Contact</h1>
            <form onSubmit={handleSendEmail}>
                <div>
                    <input
                        name="name"
                        type="text"
                        placeholder="Tu nombre"
                        value={form.name}
                        onChange={handleOnchange}
                    />
                </div>
                <div>
                    <input
                        name="email"
                        type="email"
                        placeholder="Tu correo"
                        value={form.email}
                        onChange={handleOnchange}
                    />
                </div>
                <div>
                    <input
                        name="subject"
                        type="text"
                        placeholder="Asunto"
                        value={form.subject}
                        onChange={handleOnchange}
                    />
                </div>
                <div>
                    <textarea
                        name="message"
                        rows="8"
                        placeholder="Tu mensaje"
                        value={form.message}
                        onChange={handleOnchange}
                    />
                </div>
                <button type="submit">Enviar correo</button>
            </form>
        </main>
    );
};

export default Contact;