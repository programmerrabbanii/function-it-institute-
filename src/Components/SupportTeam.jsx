import React from 'react';

const supportData = [
  {
    title: "লাইভ ক্লাস",
    description: "আমাদের প্রতিটি ক্লাস Zoom অথবা Google Meet এর মাধ্যমে নেওয়া হয়।",
    icon: "📚",
  },
  {
    title: "২৪/৭ সাপোর্ট",
    description: "আমাদের আছে ২৪ ঘন্টা Live সাপোর্ট, যার মাধ্যমে সকল সমাধান পেয়ে যাবেন।",
    icon: "🕐",
  },
  {
    title: "বায়ার Zoom সাপোর্ট",
    description: "স্টুডেন্ট বায়ার পেলে তখন আমাদের অভিজ্ঞ সাপোর্ট মেম্বার Zoom এ গিয়ে কাজ নিয়ে দেয়।",
    icon: "🤝",
  },
  {
    title: "ডেডিকেটেড টিম",
    description: "আমাদের আছে ডেডিকেটেড টিম, এর সাথে কাজ করার সুযোগ রয়েছে।",
    icon: "🌐",
  },
  {
    title: "ক্লাস শেষে রেকর্ডেড ভিডিও",
    description: "আমাদের প্রতিটি ক্লাসের রেকর্ডেড ভিডিও দেওয়া থাকে, যা ক্লাস শেষে দেওয়া হয়।",
    icon: "🎥",
  },
  {
    title: "মার্কেটপ্লেসের বাইরে বায়ার",
    description: "মার্কেটপ্লেস এবং মার্কেটপ্লেস এর বাইরে বায়ার পাওয়ার টিপস দিয়ে থাকি।",
    icon: "💬",
  },
];

const SupportSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">Our support facilities
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {supportData.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow"
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold text-red-600 mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SupportSection;
