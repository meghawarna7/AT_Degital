import React, { useState } from 'react';
import './FAQSection.css'; // Import custom CSS for styling

const FAQSection = () => {
  // State to manage the visibility of answers and clicked state of questions
  const [activeIndex, setActiveIndex] = useState(null);
  const [clickedQuestions, setClickedQuestions] = useState([false, false, false]);

  // Function to toggle visibility of answers and change question color to purple after clicked
  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
    const newClickedQuestions = [...clickedQuestions];
    if (newClickedQuestions[index]) {
      newClickedQuestions[index] = false; // Reset to false if double-clicked
    } else {
      newClickedQuestions[index] = true;
    }
    setClickedQuestions(newClickedQuestions);
  };

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {/* Question 1 */}
        <div className={`faq-item ${activeIndex === 0 ? 'active' : ''}`}>
          <div className="faq-question" onClick={() => toggleAnswer(0)} style={{ color: clickedQuestions[0] ? '#6A44F2' : '#000' }}>
            Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
            <button className="toggle-btn" style={{ color: clickedQuestions[0] ? '#6A44F2' : '#000' }}>{activeIndex === 0 ? '-' : '+'}</button>
          </div>
          <div className="faq-answer">Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.</div>
        </div>
        
        {/* Question 2 */}
        <div className={`faq-item ${activeIndex === 1 ? 'active' : ''}`}>
          <div className="faq-question" onClick={() => toggleAnswer(1)} style={{ color: clickedQuestions[1] ? '#6A44F2' : '#000' }}>
            Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?
            <button className="toggle-btn" style={{ color: clickedQuestions[1] ? '#6A44F2' : '#000' }}>{activeIndex === 1 ? '-' : '+'}</button>
          </div>
          <div className="faq-answer">Answer 2</div>
        </div>
        
        {/* Question 3 */}
        <div className={`faq-item ${activeIndex === 2 ? 'active' : ''}`}>
          <div className="faq-question" onClick={() => toggleAnswer(2)} style={{ color: clickedQuestions[2] ? '#6A44F2' : '#000' }}>
            Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?
            <button className="toggle-btn" style={{ color: clickedQuestions[2] ? '#6A44F2' : '#000' }}>{activeIndex === 2 ? '-' : '+'}</button>
          </div>
          <div className="faq-answer">Answer 3</div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
