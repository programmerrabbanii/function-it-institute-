import React from "react";

const FAQ = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Frequently Asked Questions
        </h2>
     
        <div className="space-y-4">
          
          <div className="collapse collapse-arrow border border-base-300 bg-white rounded-xl shadow-sm">
            <input type="radio" name="faq" defaultChecked />
            <div className="collapse-title text-lg font-semibold text-red-600">
              কেন ফাংশন আইটিতে এডমিশন নিবেন ?
            </div>
            <div className="collapse-content text-gray-700 text-sm">
              ২ মাস এর লাইভ ক্লাস যেখানে ক্লাস চলাকালীন প্রশ্ন করতে পারবেন। ২৪ ঘন্টা ইনস্ট্যান্ট সাপোর্ট লাইফটাইম এর জন্য। মার্কেটপ্লেস ও ক্লায়েন্ট রিলেটেড সাপোর্ট। ক্লাস শেষে রেকর্ডেড ভিডিও, ফাইভার/আপওয়ার্ক গাইডলাইন, ক্লায়েন্ট হ্যান্ডলিং এবং ইনকাম উইথড্র মেথড সহ পূর্ণ সাপোর্ট প্রদান করা হয়।
            </div>
          </div>

        
          <div className="collapse collapse-arrow border border-base-300 bg-white rounded-xl shadow-sm">
            <input type="radio" name="faq" />
            <div className="collapse-title text-lg font-semibold text-red-600">
              কোর্স টি করার জন্য কি কি লাগবে?
            </div>
            <div className="collapse-content text-gray-700 text-sm">
              একটি ল্যাপটপ/কম্পিউটার এবং ইন্টারনেট কানেকশন হলেই যথেষ্ট। কোনো পূর্ব অভিজ্ঞতার প্রয়োজন নেই, কারণ কোর্সটি বেসিক থেকে অ্যাডভান্স পর্যন্ত শেখানো হবে।
            </div>
          </div>


          
          <div className="collapse collapse-arrow border border-base-300 bg-white rounded-xl shadow-sm">
            <input type="radio" name="faq" />
            <div className="collapse-title text-lg font-semibold text-red-600">
              কোর্স শেষে কি সার্টিফিকেট দেওয়া হয়?
            </div>
            <div className="collapse-content text-gray-700 text-sm">
              হ্যাঁ, কোর্স শেষে অনলাইন ভেরিফায়েড সার্টিফিকেট প্রদান করা হয় যা মার্কেটপ্লেসে আপনার প্রোফাইলে যুক্ত করতে পারবেন।
            </div>
          </div>

         
          <div className="collapse collapse-arrow border border-base-300 bg-white rounded-xl shadow-sm">
            <input type="radio" name="faq" />
            <div className="collapse-title text-lg font-semibold text-red-600">
              ফ্রিল্যান্সিং শুরু করতে কতদিন সময় লাগবে?
            </div>
            <div className="collapse-content text-gray-700 text-sm">
              সাধারণত ২-৩ মাস নিয়মিত চর্চার মাধ্যমে মার্কেটপ্লেসে কাজ পাওয়া সম্ভব। আমরা হাতে কলমে শেখাই কীভাবে শুরু করতে হয়।
            </div>
          </div>

         
          <div className="collapse collapse-arrow border border-base-300 bg-white rounded-xl shadow-sm">
            <input type="radio" name="faq" />
            <div className="collapse-title text-lg font-semibold text-red-600">
              ক্লাসে অংশগ্রহণ না করলে কী হবে?
            </div>
            <div className="collapse-content text-gray-700 text-sm">
              লাইভ ক্লাস মিস করলে, প্রতিটি ক্লাসের রেকর্ডেড ভিডিও প্রদান করা হয় যাতে আপনি পরে দেখে নিতে পারেন।
            </div>
          </div>

         
          <div className="collapse collapse-arrow border border-base-300 bg-white rounded-xl shadow-sm">
            <input type="radio" name="faq" />
            <div className="collapse-title text-lg font-semibold text-red-600">
              ক্লাস করার সময় জব পেলে কি সাপোর্ট পাব?
            </div>
            <div className="collapse-content text-gray-700 text-sm">
              অবশ্যই! বায়ার পেলে আমাদের অভিজ্ঞ মেন্টর টিম Zoom/Live এ গিয়ে প্রজেক্ট হ্যান্ডল করতে সাহায্য করে।
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
