<template>
  <section class="contact-info section-padding">
    <div class="container-custom">
      <div class="section-header">
        <h2 class="section-title">Kde nás najdete</h2>
        <p class="section-subtitle">
          Sídlíme v centru Prahy, ale potkáváme se s klienty především online. Preferujete osobní setkání?
          Není problém, rádi vás přivítáme v našich prostorách nebo přijedeme k vám.
        </p>
      </div>
      
      <div class="info-content-grid">
        <!-- Contact Details -->
        <div class="contact-details">
          <div class="detail-cards">
            <!-- Location Card -->
            <div class="detail-card">
              <div class="card-icon">📍</div>
              <div class="card-content">
                <h3 class="card-title">Adresa</h3>
                <p class="card-text">Descodino s.r.o.</p>
                <p class="card-text">Karlovo náměstí 285/19</p>
                <p class="card-text">120 00 Praha 2</p>
                <p class="card-text">Česká republika</p>
              </div>
            </div>
            
            <!-- Email Card -->
            <div class="detail-card">
              <div class="card-icon">✉️</div>
              <div class="card-content">
                <h3 class="card-title">Email</h3>
                <p class="card-text">
                  <a href="mailto:ahoj@descodino.cz" class="card-link">ahoj@descodino.cz</a>
                </p>
                <p class="card-small">Odpovídáme do 24 hodin v pracovní dny</p>
              </div>
            </div>
            
            <!-- Phone Card -->
            <div class="detail-card">
              <div class="card-icon">📞</div>
              <div class="card-content">
                <h3 class="card-title">Telefon</h3>
                <p class="card-text">
                  <a href="tel:+420123456789" class="card-link">+420 123 456 789</a>
                </p>
                <p class="card-small">Po-Pá, 9:00 - 17:00</p>
              </div>
            </div>
            
            <!-- Social Card -->
            <div class="detail-card">
              <div class="card-icon">🌐</div>
              <div class="card-content">
                <h3 class="card-title">Sociální sítě</h3>
                <div class="social-links">
                  <a href="https://linkedin.com/company/descodino" target="_blank" class="social-link">LinkedIn</a>
                  <a href="https://twitter.com/descodino" target="_blank" class="social-link">Twitter</a>
                  <a href="https://instagram.com/descodino" target="_blank" class="social-link">Instagram</a>
                </div>
              </div>
            </div>
          </div>
          
          <div class="company-info">
            <div class="info-item">
              <span class="info-label">IČO:</span>
              <span class="info-value">12345678</span>
            </div>
            <div class="info-item">
              <span class="info-label">DIČ:</span>
              <span class="info-value">CZ12345678</span>
            </div>
            <div class="info-item">
              <span class="info-label">Bankovní spojení:</span>
              <span class="info-value">123456789/0800</span>
            </div>
          </div>
        </div>
        
        <!-- Map Section -->
        <div class="map-container">
          <div class="map-wrapper">
            <!-- Map Placeholder (would be replaced with actual map implementation) -->
            <div class="map-placeholder">
              <div class="map-content">
                <div class="map-pin">📍</div>
                <h3 class="map-title">Descodino s.r.o.</h3>
                <p class="map-address">Karlovo náměstí 285/19, Praha</p>
              </div>
              <div class="map-overlay"></div>
            </div>
            
            <!-- Map Action Buttons -->
            <div class="map-actions">
              <a 
                href="https://maps.google.com/?q=Karlovo+náměstí+285/19,+120+00+Praha+2" 
                target="_blank"
                class="map-button"
              >
                Otevřít v Google Maps
              </a>
              <a 
                href="https://maps.apple.com/?q=Karlovo+náměstí+285/19,+120+00+Praha+2" 
                target="_blank"
                class="map-button secondary"
              >
                Navigovat
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-info {
  position: relative;
  background-color: white;
}

.section-padding {
  padding: 6rem 0;
}

.container-custom {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Section Header */
.section-header {
  text-align: center;
  max-width: 48rem;
  margin: 0 auto 4rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.125rem;
  color: #6b7280;
  line-height: 1.6;
}

/* Content Grid */
.info-content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: flex-start;
}

/* Contact Details */
.contact-details {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.detail-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.detail-card {
  background-color: #f8f9fa;
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  align-items: flex-start;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.detail-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.card-icon {
  font-size: 1.5rem;
  margin-right: 1rem;
  margin-top: 0.25rem;
}

.card-content {
  flex: 1;
}

.card-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.75rem;
}

.card-text {
  color: #4b5563;
  margin: 0 0 0.25rem;
  line-height: 1.6;
}

.card-small {
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 0.5rem;
}

.card-link {
  color: #e60000;
  text-decoration: none;
  transition: color 0.2s ease;
}

.card-link:hover {
  color: #b91c1c;
  text-decoration: underline;
}

/* Social Links */
.social-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-link {
  color: #1f2937;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  background-color: white;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
}

.social-link:hover {
  background-color: #e60000;
  color: white;
}

/* Company Info */
.company-info {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;
}

.info-item {
  display: flex;
  gap: 0.5rem;
}

.info-label {
  font-weight: 600;
  color: #4b5563;
}

.info-value {
  color: #6b7280;
}

/* Map Section */
.map-container {
  position: relative;
}

.map-wrapper {
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.map-placeholder {
  position: relative;
  width: 100%;
  height: 400px;
  background-image: url('https://maps.googleapis.com/maps/api/staticmap?center=Karlovo+náměstí+285/19,+Praha+2&zoom=15&size=600x400&maptype=roadmap&markers=color:red%7CKarlovo+náměstí+285/19,+Praha+2&key=YOUR_API_KEY');
  background-size: cover;
  background-position: center;
  background-color: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
}

.map-content {
  text-align: center;
  color: #1f2937;
  background-color: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
}

.map-pin {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.map-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.map-address {
  color: #6b7280;
}

.map-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(2px);
}

.map-actions {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background-color: #f8f9fa;
}

.map-button {
  display: inline-block;
  padding: 0.75rem 1.25rem;
  background-color: #e60000;
  color: white;
  text-decoration: none;
  border-radius: 0.5rem;
  font-weight: 600;
  text-align: center;
  flex: 1;
  transition: all 0.2s ease;
}

.map-button:hover {
  background-color: #b91c1c;
  transform: translateY(-2px);
}

.map-button.secondary {
  background-color: white;
  color: #1f2937;
  border: 1px solid #e5e7eb;
}

.map-button.secondary:hover {
  background-color: #f3f4f6;
  border-color: #d1d5db;
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .section-title {
    font-size: 2.25rem;
  }
  
  .detail-cards {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}

@media (max-width: 768px) {
  .section-padding {
    padding: 4rem 0;
  }
  
  .info-content-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .section-subtitle {
    font-size: 1rem;
  }
  
  .detail-cards {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
  
  .company-info {
    flex-direction: column;
    gap: 0.75rem;
  }
}

@media (max-width: 640px) {
  .section-header {
    margin-bottom: 2.5rem;
  }
  
  .detail-cards {
    gap: 1rem;
  }
  
  .detail-card {
    padding: 1.25rem;
  }
  
  .map-actions {
    flex-direction: column;
  }
  
  .map-content {
    padding: 1.25rem;
  }
}
</style>
