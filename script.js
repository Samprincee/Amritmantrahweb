// WhatsApp link (replace number/message as needed)
    document.getElementById('sendBtn').addEventListener('click', () => {
      const name = document.querySelector('#consult input[placeholder="Full Name"]').value.trim();
      const phone = document.querySelector('#consult input[placeholder="Phone / WhatsApp"]').value.trim();
      const goal = document.querySelector('#consult input[placeholder="Your Goal"]').value.trim();
      const msg = document.querySelector('#consult textarea').value.trim();
      const text = encodeURIComponent(`Hello! I want a free consultation.\nName: ${name}\nPhone: ${phone}\nGoal: ${goal}\nMessage: ${msg}`);
      const wa = `https://wa.me/919319045476?text=${text}`; // change number if needed
      window.open(wa, '_blank');
      document.getElementById('sentNote').classList.remove('hidden');
    });



