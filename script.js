document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Get DOM elements for the Modal ---
    const infoModal = document.getElementById('info-modal');
    const closeInfoModal = document.getElementById('close-info-modal');
    const modalBody = document.getElementById('info-modal-body');
    
    // --- 2. Central Content Definitions (Unified for all buttons and links) ---
    const modalContent = {
        // NAV BUTTON CONTENT
        'flavors-btn': `
            <h2>Our Thirst-Quenching Flavors</h2>
            <p>Our current signature line offers a flavor for every mood and occasion. Find your new favorite!</p>
            <ul>
                <li><strong>Julzo Sparkling Orange Juice:</strong> A bubbly burst of citrus sunshine.</li>
                <li><strong>Craft Soda Root Beer:</strong> A classic, creamy, and deep root beer flavor.</li>
                <li><strong>Fizzy Mango Soda:</strong> Sweet, tropical, and wonderfully effervescent.</li>
                <li><strong>Classic Ginger Soda:</strong> A crisp, spicy, and perfectly balanced ginger kick.</li>
            </ul>
        `,
        'story-btn': `
            <h2>Our Story: Born in a Blast of Bubbles</h2>
            <p><strong>Quench your Thirst</strong> was founded in **2025** by two friends, Alex and Jordan, who were tired of dull, mass-produced beverages.</p>
            <p>They shared a simple dream: to create a drink that was genuinely refreshing, made with simple ingredients, and delivered a truly satisfying experience. From a small-batch kitchen experiment, we’ve grown into a company dedicated to crafting bold, authentic flavors that cut through the noise. We believe every can should be a moment of joy—a pause button on your busy day.</p>
            <p>Welcome to the taste of true refreshment.</p>
        `,
        'sustainability-btn': `
            <h2>Sipping Sustainably: Our Commitment</h2>
            <p>We believe great taste shouldn't cost the Earth. Here are the sustainable ways we work to minimize our environmental footprint:</p>
            <ul>
                <li><strong>100% Recyclable Packaging:</strong> All our cans and packaging materials are fully recyclable aluminum and paper products.</li>
                <li><strong>Responsible Sourcing:</strong> We partner with farms and suppliers who use ethical and water-saving agricultural practices for our fruit extracts and natural ingredients.</li>
                <li><strong>Carbon Neutral Delivery Goals:</strong> We are actively investing in local logistics partners to reduce our delivery emissions and have a goal to be carbon neutral by 2030.</li>
                <li><strong>Water Stewardship:</strong> We monitor our water usage closely and implement closed-loop systems in our production facilities to conserve this vital resource.</li>
            </ul>
        `,
        'findus-btn': `
            <h2>Find Us & Connect</h2>
            <p>We're more than just a drink—we're a community! Find our products in select retailers across the country and connect with us online.</p>
            <h3>Retailers</h3>
            <p>Check your local gourmet food stores and specialty markets for our Signature Line.</p>
            <h3>Connect Online</h3>
            <p>Follow us for flavor updates, promotions, and behind-the-scenes content:</p>
            <ul>
                <li><strong>Instagram:</strong> <a href="https://instagram.com/quenchyourthirstco" target="_blank">@QuenchYourThirstCo</a></li>
                <li><strong>TikTok:</strong> @QYT_Official</li>
            </ul>
            <h3>Customer Care</h3>
            <p>Got a question or just want to chat?</p>
            <ul>
                <li><strong>WhatsApp:</strong> 063 994 2918 (Mon-Fri, 9am-5pm)</li>
            </ul>
        `,

        // FOOTER LINK CONTENT
        'privacy-link': `
            <h2>Privacy Policy</h2>
            
            <h3>1. Our Commitment to Your Privacy</h3>
            <p>At Quench Your Thirst, we are committed to protecting the privacy of our customers and website visitors. We believe in transparency and want you to understand exactly how your personal information is used. This policy outlines our practices regarding the collection, use, and disclosure of your data when you interact with our services, in compliance with applicable data protection laws, including the South African Protection of Personal Information Act (POPIA).</p>
            
            <h3>2. Information We Collect</h3>
            <p>We collect limited personal information only when it is directly relevant to enhancing your experience and processing your orders. This typically includes:</p>
            <ul>
                <li><strong>Identifiers:</strong> Your name, email address, physical shipping address, and phone number when you place an order or contact customer service.</li>
                <li><strong>Transaction Data:</strong> Details about the products you purchase, the amount spent, and your payment method (processed securely by third-party payment providers).</li>
                <li><strong>Usage Data:</strong> Non-personal information about how you use our website, such as your IP address, browser type, and pages visited, which helps us improve site performance.</li>
            </ul>

            <h3>3. How We Use Your Information</h3>
            <p>We use the collected information strictly for the following primary purposes:</p>
            <ul>
                <li><strong>Fulfillment:</strong> To process, confirm, and deliver your orders efficiently.</li>
                <li><strong>Communication:</strong> To respond to your inquiries, provide customer support, and, only if you opt-in, send you product updates or promotional offers.</li>
                <li><strong>Improvement:</strong> To monitor website usage, diagnose technical issues, and improve our product offerings and site functionality.</li>
            </ul>

            <h3>4. Data Sharing and Security</h3>
            <p>We never sell or rent your personal information to third parties. We only share data when strictly necessary, such as with our shipping partners to deliver your goods, or with secure payment processors. Your data is stored securely using industry-standard encryption and security measures to prevent unauthorized access. You have the right to request access to, correction of, or deletion of your personal data at any time.</p>
            <p>You can contact our Privacy Officer regarding any data concerns at: <a href="mailto:privacy@quenchoriginals.com">privacy@quenchoriginals.com</a></p>
        `,
        'terms-link': `
            <h2>Terms of Use</h2>
            <h3>1. Acceptance of Terms</h3>
            <p>By accessing, browsing, or using the Quench Your Thirst website ("the Site"), you acknowledge that you have read, understood, and agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any part of these terms, you must discontinue use of the Site immediately.</p>
            
            <h3>2. Intellectual Property Rights</h3>
            <p>All content displayed on the Site—including, but not limited to, the "Quench Your Thirst" logo, text, images, product photography, trademarks, and original code—is the exclusive property of Quench Your Thirst and is protected by copyright and intellectual property laws. You are granted a limited license to access and use the Site for personal, non-commercial use only. Any unauthorized copying, reproduction, or commercial distribution of the content is strictly prohibited.</p>
            
            <h3>3. User Conduct</h3>
            <p>You agree to use the Site only for lawful purposes. You must not use the Site to transmit any material that is harassing, defamatory, vulgar, harmful, unlawful, or misleading. Furthermore, you agree not to interfere with the proper working of the Site or attempt to circumvent security measures.</p>
            
            <h3>4. Limitation of Liability and Disclaimer</h3>
            <p>We strive to ensure that all information on the Site is accurate and current. However, we make no guarantees about the completeness or timeliness of the information provided. Quench Your Thirst is not responsible for any damage or loss resulting from your use of the Site or from any technical failures. The Site is provided on an "as is" and "as available" basis without any warranties.</p>
            
            <h3>5. Governing Law</h3>
            <p>These Terms of Use are governed by the laws of South Africa. Any disputes arising from the use of the Site shall be resolved under the exclusive jurisdiction of the South African courts.</p>
        `,
        'careers-link': `
            <h2>Careers</h2>
            <h3>1. Join the Movement: Refresh the World</h3>
            <p>At Quench Your Thirst, we believe in energy, creativity, and explosive growth. We are more than just a beverage company; we are a community built by individuals who share a passion for innovation, sustainability, and authentic flavor. We look for passionate, driven people who are ready to roll up their sleeves and contribute to a brand that's redefining refreshment.</p>
            
            <h3>2. Our Culture and Opportunity</h3>
            <p>We foster a dynamic, inclusive, and fast-paced culture where every idea is valued. We are committed to providing our employees with continuous learning opportunities, competitive compensation, and the chance to directly influence the success of a growing brand founded in 2025.</p>
            
            <h3>3. Current Opportunities Available</h3>
            <p>We are actively seeking talented individuals for the following roles:</p>
            <ul>
                <li><strong>Marketing & Brand Interns:</strong> Focused on digital content creation, social media engagement, and market research.</li>
                <li><strong>Sales Representatives:</strong> Responsible for expanding our retail presence and managing relationships with distributors.</li>
                <li><strong>Production & Logistics Assistants:</strong> Essential roles in ensuring our quality standards are met and our drinks are shipped efficiently.</li>
            </ul>
            
            <h3>4. How to Apply</h3>
            <p>We welcome both applications for specific roles and speculative applications for future openings. If you are enthusiastic about the beverage industry and believe you can add fizz to our team, we want to hear from you.</p>
            <p>To apply, please send your CV and a short motivation letter detailing why you want to join Quench Your Thirst to: <a href="mailto:careers@quenchoriginals.com">careers@quenchoriginals.com</a></p>
            <p>Join the movement. Refresh the world.</p>
        `
    };

    // --- 3. Central Modal Display Function ---
    function openModal(buttonId) {
        modalBody.innerHTML = modalContent[buttonId];
        // Note: The previous CSS used 'flex' for centering, but the second JS used 'block'. Sticking with 'flex'
        // for correct CSS styling based on the first CSS block's modal properties.
        infoModal.style.display = 'flex'; 
    }

    // --- 4. Event Listeners ---

    // Smooth scroll for CTA button
    document.getElementById('cta-button').addEventListener('click', function() {
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    });

    // Attach listeners to all nav buttons
    document.getElementById('flavors-btn').addEventListener('click', () => openModal('flavors-btn'));
    document.getElementById('story-btn').addEventListener('click', () => openModal('story-btn'));
    document.getElementById('sustainability-btn').addEventListener('click', () => openModal('sustainability-btn'));
    document.getElementById('findus-btn').addEventListener('click', () => openModal('findus-btn'));

    // Attach listeners to all footer links 
    document.getElementById('privacy-link').addEventListener('click', (e) => {
        e.preventDefault();
        openModal('privacy-link');
    });
    document.getElementById('terms-link').addEventListener('click', (e) => {
        e.preventDefault();
        openModal('terms-link');
    });
    document.getElementById('careers-link').addEventListener('click', (e) => {
        e.preventDefault();
        openModal('careers-link');
    });


    // --- 5. Modal Closing Logic ---

    // Close modal when 'x' is clicked
    closeInfoModal.onclick = function() {
        infoModal.style.display = 'none';
    }

    // Close modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target == infoModal) {
            infoModal.style.display = 'none';
        }
    }
});