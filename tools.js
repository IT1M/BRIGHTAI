document.addEventListener('DOMContentLoaded', function() {

  const apiKey = 'AIzaSyCIjaOxZq6CUSffkAcheyp0hA40rC09dM8'; // ضع هنا مفتاح API الفعلي

  async function geminiRequest(prompt) {
      const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent"; // Replace with actual Gemini API endpoint
      try {
          const response = await fetch(url, {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  'x-goog-api-key': apiKey,
              },
              body: JSON.stringify({
                    contents: [{
                      parts: [{ text: prompt }],
                    }]
              }),
          });
      
          if (!response.ok) {
              const error = await response.json();
              throw new Error(`HTTP error! status: ${response.status}, details: ${JSON.stringify(error)}`);
  
          }
  
          const data = await response.json();
          if (data.candidates && data.candidates.length > 0 && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts.length > 0 && data.candidates[0].content.parts[0].text)
          {
              const generatedText = data.candidates[0].content.parts[0].text;
            return generatedText;
          } else {
                throw new Error("Invalid response from Gemini API: No text found in response");
            }
          } catch (error) {
            console.error("Error calling Gemini API:", error);
              throw error;
          }
  
      }
    
  window.analyzeInventory = async function () {
      const input = document.getElementById('inventory-input').value.trim();
      const outputDiv = document.getElementById('inventory-output');
     if (!input) {
           outputDiv.textContent = 'الرجاء إدخال بيانات المخزون.';
           return;
         }
      outputDiv.textContent = 'جاري تحليل بيانات المخزون...';
      try {
          const prompt = `قم بتحليل بيانات المخزون التالية وتقديم توصيات: ${input}`;
          const result = await geminiRequest(prompt);
          outputDiv.innerHTML = `<strong>تحليل المخزون:</strong><br>${result}`;
       }
       catch(error){
         outputDiv.innerHTML = `<strong>حدث خطأ أثناء تحليل المخزون:</strong><br> ${error.message}`;
      }
  };
 
    window.analyzeSales = async function() {
    const input = document.getElementById('sales-input').value.trim();
        const outputDiv = document.getElementById('sales-output');
    if (!input) {
           outputDiv.textContent = 'الرجاء إدخال بيانات المبيعات.';
           return;
      }
     outputDiv.textContent = 'جاري تحليل بيانات المبيعات...';
 
        try {
              const prompt = `قم بتحليل بيانات المبيعات التالية وتقديم توصيات: ${input}`;
             const result = await geminiRequest(prompt);
               outputDiv.innerHTML = `<strong>تحليل المبيعات:</strong><br>${result}`;
          }
        catch(error){
             outputDiv.innerHTML = `<strong>حدث خطأ أثناء تحليل المبيعات:</strong><br> ${error.message}`;
         }
    };

    window.generateInvoice = async function() {
       const input = document.getElementById('invoice-input').value.trim();
        const outputDiv = document.getElementById('invoice-output');
        if (!input) {
             outputDiv.textContent = 'الرجاء إدخال بيانات الفاتورة.';
              return;
          }
    outputDiv.textContent = 'جاري إنشاء الفاتورة...';

         try {
               const prompt = `قم بإنشاء فاتورة بناءً على البيانات التالية: ${input}`;
             const result = await geminiRequest(prompt);
             outputDiv.innerHTML = `<strong>الفاتورة:</strong><br>${result}`;
          }
         catch(error){
              outputDiv.innerHTML = `<strong>حدث خطأ أثناء إنشاء الفاتورة:</strong><br> ${error.message}`;
          }
    };
window.predictSuccess = async function() {
    const input = document.getElementById('financial-input').value.trim();
    const outputDiv = document.getElementById('financial-output');
      if (!input) {
        outputDiv.textContent = 'الرجاء إدخال بيانات مالية.';
        return;
      }
    outputDiv.textContent = 'جاري توقع النجاح المالي...';
   try {
            const prompt = `قم بتحليل البيانات المالية التالية وتقديم توقع للنجاح المالي: ${input}`;
          const result = await geminiRequest(prompt);
           outputDiv.innerHTML = `<strong>توقع النجاح المالي:</strong><br>${result}`;
          }
      catch(error){
        outputDiv.innerHTML = `<strong>حدث خطأ أثناء توقع النجاح المالي:</strong><br> ${error.message}`;
         }
    };

   window.calculateROI = async function() {
        const input = document.getElementById('roi-input').value.trim();
        const outputDiv = document.getElementById('roi-output');
      if (!input) {
           outputDiv.textContent = 'الرجاء إدخال بيانات الاستثمار.';
            return;
          }
      outputDiv.textContent = 'جاري حساب عائد الاستثمار...';

        try {
                const prompt = `قم بحساب عائد الاستثمار بناءً على البيانات التالية: ${input}`;
              const result = await geminiRequest(prompt);
               outputDiv.innerHTML = `<strong>عائد الاستثمار:</strong><br>${result}`;
           }
       catch(error){
            outputDiv.innerHTML = `<strong>حدث خطأ أثناء حساب عائد الاستثمار:</strong><br> ${error.message}`;
         }
      };
       window.analyzeEmployeeData = async function() {
           const input = document.getElementById('employee-input').value.trim();
             const outputDiv = document.getElementById('employee-output');
        if (!input) {
            outputDiv.textContent = 'الرجاء إدخال بيانات الموظفين.';
               return;
       }
        outputDiv.textContent = 'جاري تحليل بيانات الموظفين...';
         try {
              const prompt = `قم بتحليل بيانات الموظفين التالية وتقديم رؤى حول الأداء والتطور الوظيفي: ${input}`;
             const result = await geminiRequest(prompt);
             outputDiv.innerHTML = `<strong>تحليل بيانات الموظفين:</strong><br>${result}`;
         }
         catch(error){
               outputDiv.innerHTML = `<strong>حدث خطأ أثناء تحليل بيانات الموظفين:</strong><br> ${error.message}`;
            }
      };
       window.generateLearningPlan = async function() {
       const input = document.getElementById('learning-input').value.trim();
        const outputDiv = document.getElementById('learning-output');
        if (!input) {
              outputDiv.textContent = 'الرجاء إدخال موضوع الدراسة.';
              return;
         }
         outputDiv.textContent = 'جاري توليد توصيات التعلم...';
         try {
               const prompt = `قم بتوليد خطة تعلم مخصصة للموضوع التالي: ${input}`;
             const result = await geminiRequest(prompt);
              outputDiv.innerHTML = `<strong>توصيات التعلم:</strong><br>${result}`;
          }
        catch(error){
           outputDiv.innerHTML = `<strong>حدث خطأ أثناء توليد توصيات التعلم:</strong><br> ${error.message}`;
          }
      };
      window.analyzeHomework = async function() {
          const input = document.getElementById('homework-input').value.trim();
          const outputDiv = document.getElementById('homework-output');
            if (!input) {
               outputDiv.textContent = 'الرجاء إدخال الواجب.';
                return;
           }
          outputDiv.textContent = 'جاري تحليل الواجب...';
          try {
               const prompt = `قم بتحليل الواجب التالي وتقديم ملاحظات: ${input}`;
                const result = await geminiRequest(prompt);
               outputDiv.innerHTML = `<strong>تحليل الواجب:</strong><br>${result}`;
          }
        catch(error){
               outputDiv.innerHTML = `<strong>حدث خطأ أثناء تحليل الواجب:</strong><br> ${error.message}`;
          }
     };
 
      window.askTutor = async function() {
        const input = document.getElementById('tutor-input').value.trim();
          const outputDiv = document.getElementById('tutor-output');
          if (!input) {
              outputDiv.textContent = 'الرجاء إدخال سؤالك.';
               return;
          }
           outputDiv.textContent = 'جاري البحث عن إجابة...';
            try {
                const prompt = `أجب على السؤال التالي: ${input}`;
                const result = await geminiRequest(prompt);
               outputDiv.innerHTML = `<strong>الإجابة:</strong><br>${result}`;
            }
        catch(error){
              outputDiv.innerHTML = `<strong>حدث خطأ أثناء البحث عن الإجابة:</strong><br> ${error.message}`;
            }
        };
         window.generateContent = async function() {
          const input = document.getElementById('content-input').value.trim();
             const template = document.getElementById('content-template').value
          const outputDiv = document.getElementById('content-output');
            if (!input) {
              outputDiv.textContent = 'الرجاء إدخال موضوع المحتوى.';
               return;
          }
         outputDiv.textContent = 'جاري توليد المحتوى...';
            try {
                  const prompt = `قم بتوليد  ${template}  عربي حول الموضوع التالي: ${input}`;
                const result = await geminiRequest(prompt);
                 outputDiv.innerHTML = `<strong>المحتوى:</strong><br>${result}`;
            }
         catch(error){
               outputDiv.innerHTML = `<strong>حدث خطأ أثناء توليد المحتوى:</strong><br> ${error.message}`;
           }
         };
         window.summarizeText = async function() {
            const input = document.getElementById('summarizer-input').value.trim();
             const outputDiv = document.getElementById('summarizer-output');
             const length = document.getElementById('summarizer-length').value;
          if (!input) {
             outputDiv.textContent = 'الرجاء إدخال النص المراد تلخيصه.';
                return;
           }
        outputDiv.textContent = 'جاري تلخيص النص...';
          try {
                const prompt = `قم بتلخيص النص التالي بشكل ${length}: ${input}`;
             const result = await geminiRequest(prompt);
                 outputDiv.innerHTML = `<strong>ملخص النص:</strong><br>${result}`;
             }
            catch(error){
               outputDiv.innerHTML = `<strong>حدث خطأ أثناء تلخيص النص:</strong><br> ${error.message}`;
               }
          };
       window.checkGrammar = async function() {
             const input = document.getElementById('grammar-input').value.trim();
               const outputDiv = document.getElementById('grammar-output');
          if (!input) {
             outputDiv.textContent = 'الرجاء إدخال النص المراد تدقيقه.';
                 return;
          }
           outputDiv.textContent = 'جاري تدقيق النص...';

          try {
                  const prompt = `قم بتدقيق النص التالي لغويًا وقواعديًا: ${input}`;
               const result = await geminiRequest(prompt);
               outputDiv.innerHTML = `<strong>النص المدقق:</strong><br>${result}`;
            }
          catch(error){
             outputDiv.innerHTML = `<strong>حدث خطأ أثناء تدقيق النص:</strong><br> ${error.message}`;
             }
        };
      window.generateImage = async function() {
            const input = document.getElementById('image-input').value.trim();
               const outputDiv = document.getElementById('image-output');
          if (!input) {
                outputDiv.textContent = 'الرجاء إدخال وصف للصورة.';
                  return;
          }
           outputDiv.textContent = 'جاري إنشاء الصورة...';
 
          try {
              const prompt = `قم بإنشاء صورة بناءً على الوصف التالي: ${input}`;
               const result = await geminiRequest(prompt);
               outputDiv.innerHTML = `<strong>وصف الصورة:</strong><br>${result}`;
           }
        catch(error){
            outputDiv.innerHTML = `<strong>حدث خطأ أثناء إنشاء الصورة:</strong><br> ${error.message}`;
         }
     };
 
     window.generateQuiz = async function() {
         const input = document.getElementById('quiz-input').value.trim();
         const outputDiv = document.getElementById('quiz-output');
         if (!input) {
               outputDiv.textContent = 'الرجاء إدخال المادة التعليمية.';
             return;
         }
           outputDiv.textContent = 'جاري إنشاء الاختبار...';
         try {
              const prompt = `قم بإنشاء اختبار مخصص بناءً على المادة التعليمية التالية: ${input}`;
              const result = await geminiRequest(prompt);
               outputDiv.innerHTML = `<strong>الاختبار:</strong><br>${result}`;
           }
           catch(error){
             outputDiv.innerHTML = `<strong>حدث خطأ أثناء إنشاء الاختبار:</strong><br> ${error.message}`;
          }
    };
});