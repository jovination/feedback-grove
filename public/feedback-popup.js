
/**
 * FeedbackGrove Popup Widget
 * This script creates a popup feedback widget that can be embedded on any website
 */

(function() {
  // Get script attributes
  const script = document.currentScript;
  const username = script.getAttribute('data-username');
  const theme = script.getAttribute('data-theme') || 'light';
  const template = script.getAttribute('data-template') || 'standard';
  const baseUrl = script.src.split('/feedback-popup.js')[0];
  
  // Create widget button
  const createWidgetButton = () => {
    const button = document.createElement('button');
    button.id = 'feedback-grove-button';
    button.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
      <span>Feedback</span>
    `;
    
    // Style the button
    Object.assign(button.style, {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '10px 16px',
      backgroundColor: theme === 'dark' ? '#333' : '#fff',
      color: theme === 'dark' ? '#fff' : '#333',
      border: 'none',
      borderRadius: '50px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      zIndex: '9998',
      transition: 'all 0.2s ease'
    });
    
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'scale(1.05)';
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'scale(1)';
    });
    
    return button;
  };
  
  // Create widget modal
  const createWidgetModal = () => {
    const modal = document.createElement('div');
    modal.id = 'feedback-grove-modal';
    
    // Style the modal
    Object.assign(modal.style, {
      position: 'fixed',
      bottom: '80px',
      right: '20px',
      width: '400px',
      maxWidth: 'calc(100vw - 40px)',
      height: '500px',
      backgroundColor: theme === 'dark' ? '#222' : '#fff',
      borderRadius: '12px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      zIndex: '9999',
      overflow: 'hidden',
      display: 'none',
      transition: 'all 0.3s ease',
      transform: 'translateY(20px)',
      opacity: '0'
    });
    
    // Create iframe for the feedback form
    const iframe = document.createElement('iframe');
    iframe.src = `${baseUrl}/feedback/${username}?theme=${theme}&template=${template}`;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    
    // Create close button
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '&times;';
    
    Object.assign(closeButton.style, {
      position: 'absolute',
      top: '10px',
      right: '10px',
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      backgroundColor: theme === 'dark' ? '#444' : '#f1f1f1',
      color: theme === 'dark' ? '#fff' : '#333',
      border: 'none',
      fontSize: '20px',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: '10'
    });
    
    closeButton.addEventListener('click', toggleModal);
    
    modal.appendChild(iframe);
    modal.appendChild(closeButton);
    
    return modal;
  };
  
  // Toggle modal visibility
  const toggleModal = () => {
    const modal = document.getElementById('feedback-grove-modal');
    const isVisible = modal.style.display === 'block';
    
    if (isVisible) {
      modal.style.opacity = '0';
      modal.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        modal.style.display = 'none';
      }, 300);
    } else {
      modal.style.display = 'block';
      
      setTimeout(() => {
        modal.style.opacity = '1';
        modal.style.transform = 'translateY(0)';
      }, 10);
    }
  };
  
  // Initialize widget
  const init = () => {
    if (!username) {
      console.error('FeedbackGrove: data-username attribute is required');
      return;
    }
    
    // Create and append button and modal
    const button = createWidgetButton();
    const modal = createWidgetModal();
    
    document.body.appendChild(button);
    document.body.appendChild(modal);
    
    // Add click event to button
    button.addEventListener('click', toggleModal);
    
    // Close modal when clicked outside
    document.addEventListener('click', (e) => {
      const modal = document.getElementById('feedback-grove-modal');
      const button = document.getElementById('feedback-grove-button');
      
      if (modal && modal.style.display === 'block' && 
          e.target !== modal && 
          !modal.contains(e.target) && 
          e.target !== button && 
          !button.contains(e.target)) {
        toggleModal();
      }
    });
  };
  
  // Initialize when DOM is fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
