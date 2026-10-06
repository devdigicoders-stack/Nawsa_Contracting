import React from 'react';
import { Building2, CheckCircle2 } from 'lucide-react';
import './GovSchools.css';

const schools = [
  "Al Shamal Primary School for Girls",
  "Al Shamal Preparatory & Secondary School for Girls",
  "Al Shamal Primary School for Boys",
  "Al Shamal Preparatory School for Boys",
  "Al Shamal Secondary School for Boys",
  "Al-Zubara Primary, Preparatory & Secondary School for Boys",
  "Al-Kaaban Primary, Preparatory & Secondary School for Girls",
  "Al-Kaaban Primary, Preparatory & Secondary School for Boys",
  "Al-Kharsaah Primary, Preparatory & Secondary School for Girls",
  "Al-Kharsaah Primary, Preparatory & Secondary School for Boys",
  "Dukhan Primary, Preparatory & Secondary School for Girls",
  "Dukhan Primary, Preparatory & Secondary School for Boys",
  "Al-Karaana Primary, Preparatory & Secondary School for Girls",
  "Al-Karaana Primary, Preparatory & Secondary School for Boys",
  "Al-Ghuwairiya Primary, Preparatory & Secondary School for Girls",
  "Al-Jemailiya Primary, Preparatory & Secondary School for Girls",
  "Al-Jemailiya Primary, Preparatory & Secondary School for Boys",
  "Rawdat Rashid Primary, Preparatory & Secondary School for Girls",
  "Khawla bint Al Azwar Primary School for Girls",
  "Nusaiba bint Kaab Primary School for Girls",
  "Qatar Primary School for Girls",
  "Ali bin Abi Talib Preparatory School",
  "Doha Preparatory School",
  "Omar bin Al Khattab Secondary School",
  "Ahmed bin Hanbal Secondary School",
  "Qatar Science and Technology Preparatory & Secondary School for Boys",
  "Qatar Science and Technology Secondary School for Girls",
  "Ain Khaled Secondary School for Boys",
  "Doha Preparatory School for Girls",
  "Muaither Primary School for Girls",
  "Saud Bin Abd al-Rahman Kindergarten for Boys",
  "Lubaba Bint Al-Harith Primary School for Girls",
  "Maymunah Primary School for Girls_B",
  "Rabi'a Al-Adawiyya Secondary School for Girls",
  "Al-Khansa' Primary School for Girls",
  "Al Wakra Secondary School for Boys",
  "Al Wakra Model School for Boys",
  "Al Wakra Primary School",
  "Al Wakra Preparatory School",
  "Al Wukair Secondary School for Boys",
  "Souda Bint Zamaa Preparatory School",
  "Zainab Bint Jahsh Primary School",
  "Sumayya Primary School",
  "Al Thumama Primary School for Boys",
  "Al Thumama Primary School for Girls",
  "Al Thumama Secondary School for Girls",
  "Moza Bint Mohammed Preparatory School for Girls",
  "Al Hidaya School for Special Needs – Al Thumama"
];

const GovSchools = () => {
  return (
    <section className="section-padding bg-light gov-schools-section">
      <div className="container">
        <div className="section-header text-center mb-5">
          <div className="flex justify-center mb-4">
            <div className="icon-wrapper bg-primary text-white p-4 rounded-full">
              <Building2 size={32} />
            </div>
          </div>
          <h2 className="h2">Government Educational Projects</h2>
          <p className="text-body max-w-3xl mx-auto mt-2">
            We are proud to have successfully partnered with and delivered extensive facilities management, renovation, and maintenance services to <strong>48 Government Schools</strong> across Qatar.
          </p>
        </div>
        
        <div className="schools-container">
          <div className="schools-grid">
            {schools.map((school, index) => (
              <div key={index} className="school-item">
                <CheckCircle2 size={18} className="text-primary flex-shrink-0" />
                <span className="school-name">{school}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovSchools;
