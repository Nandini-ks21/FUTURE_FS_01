import React, {useState} from 'react'
export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', message:''})
  function update(e){ setForm({...form, [e.target.name]: e.target.value}) }
  function openGmail(e){ e.preventDefault(); const to='nandiniks203@gmail.com'; const subject=encodeURIComponent('Portfolio inquiry from '+form.name); const body=encodeURIComponent(`Name: ${form.name}%0AEmail: ${form.email}%0A%0A${form.message}`); const url=`https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`; window.open(url,'_blank','noopener'); }
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p className="muted">Prefer email? Click “Email me (Gmail)” above or use the quick form — it will open a Gmail compose window with your message.</p>
      <form onSubmit={openGmail} className="contact-form">
        <label>Name<input name="name" required value={form.name} onChange={update} /></label>
        <label>Email<input name="email" type="email" required value={form.email} onChange={update} /></label>
        <label>Message<textarea name="message" rows="6" required value={form.message} onChange={update} /></label>
        <div className="form-actions">
          <button className="btn" type="submit">Open in Gmail</button>
          <a className="btn ghost" href="mailto:nandiniks203@gmail.com">Open default mail app</a>
        </div>
      </form>
    </section>
  )
}
