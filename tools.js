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
    window.generatePresentation = async function() {
      const input = document.getElementById('presentation-input').value.trim();
        const outputDiv = document.getElementById('presentation-output');
          if (!input) {
                outputDiv.textContent = 'الرجاء إدخال موضوع العرض التقديمي.';
                 return;
          }
        outputDiv.textContent = 'جاري إنشاء العرض التقديمي...';
      try {
              const prompt = `قم بإنشاء عرض تقديمي احترافي بناءً على الموضوع التالي: ${input}`;
                const result = await geminiRequest(prompt);
              outputDiv.innerHTML = `<strong>العرض التقديمي:</strong><br>${result}`;
           }
      catch(error){
                outputDiv.innerHTML = `<strong>حدث خطأ أثناء إنشاء العرض التقديمي:</strong><br> ${error.message}`;
            }
    };
  window.analyzeSentiment = async function() {
        const input = document.getElementById('sentiment-input').value.trim();
          const outputDiv = document.getElementById('sentiment-output');
      if (!input) {
            outputDiv.textContent = 'الرجاء إدخال النص المراد تحليله.';
              return;
        }
      outputDiv.textContent = 'جاري تحليل المشاعر...';
       try {
            const prompt = `قم بتحليل المشاعر في النص التالي: ${input}`;
            const result = await geminiRequest(prompt);
           outputDiv.innerHTML = `<strong>تحليل المشاعر:</strong><br>${result}`;
        }
        catch(error){
            outputDiv.innerHTML = `<strong>حدث خطأ أثناء تحليل المشاعر:</strong><br> ${error.message}`;
         }
    };
  window.analyzeLiteraryText = async function() {
      const input = document.getElementById('literary-input').value.trim();
        const outputDiv = document.getElementById('literary-output');
       if (!input) {
           outputDiv.textContent = 'الرجاء إدخال النص الأدبي.';
           return;
         }
      outputDiv.textContent = 'جاري تحليل النص الأدبي...';
     try {
          const prompt = `قم بتحليل النص الأدبي التالي لتحديد السمات الأدبية: ${input}`;
         const result = await geminiRequest(prompt);
          outputDiv.innerHTML = `<strong>تحليل النص الأدبي:</strong><br>${result}`;
       }
     catch(error){
           outputDiv.innerHTML = `<strong>حدث خطأ أثناء تحليل النص الأدبي:</strong><br> ${error.message}`;
        }
  };
   window.generateMarketingPlan = async function() {
       const input = document.getElementById('marketing-input').value.trim();
         const outputDiv = document.getElementById('marketing-output');
    if (!input) {
         outputDiv.textContent = 'الرجاء إدخال بيانات المنتج والسوق.';
         return;
       }
       outputDiv.textContent = 'جاري إنشاء الخطة التسويقية...';
     try {
             const prompt = `قم بإنشاء خطة تسويقية بناءً على البيانات التالية: ${input}`;
           const result = await geminiRequest(prompt);
          outputDiv.innerHTML = `<strong>الخطة التسويقية:</strong><br>${result}`;
       }
     catch(error){
            outputDiv.innerHTML = `<strong>حدث خطأ أثناء إنشاء الخطة التسويقية:</strong><br> ${error.message}`;
         }
   };
   window.analyzeGeographicData = async function() {
      const input = document.getElementById('geographic-input').value.trim();
        const outputDiv = document.getElementById('geographic-output');
       if (!input) {
            outputDiv.textContent = 'الرجاء إدخال البيانات الجغرافية.';
            return;
        }
        outputDiv.textContent = 'جاري تحليل البيانات الجغرافية...';
    try {
            const prompt = `قم بتحليل البيانات الجغرافية التالية وإظهار النتائج على خريطة تفاعلية: ${input}`;
            const result = await geminiRequest(prompt);
              outputDiv.innerHTML = `<strong>تحليل البيانات الجغرافية:</strong><br>${result}`;
        }
    catch(error){
              outputDiv.innerHTML = `<strong>حدث خطأ أثناء تحليل البيانات الجغرافية:</strong><br> ${error.message}`;
        }
  };
   window.generateInteractiveStory = async function() {
      const input = document.getElementById('story-input').value.trim();
        const outputDiv = document.getElementById('story-output');
      if (!input) {
          outputDiv.textContent = 'الرجاء إدخال نص القصة.';
            return;
      }
        outputDiv.textContent = 'جاري إنشاء القصة التفاعلية...';
    try {
          const prompt = `قم بإنشاء قصة تفاعلية بناءً على النص التالي: ${input}`;
        const result = await geminiRequest(prompt);
           outputDiv.innerHTML = `<strong>القصة التفاعلية:</strong><br>${result}`;
        }
    catch(error){
          outputDiv.innerHTML = `<strong>حدث خطأ أثناء إنشاء القصة التفاعلية:</strong><br> ${error.message}`;
        }
  };
   window.analyzeHealthData = async function() {
      const input = document.getElementById('health-input').value.trim();
       const outputDiv = document.getElementById('health-output');
      if (!input) {
           outputDiv.textContent = 'الرجاء إدخال البيانات الصحية.';
         return;
       }
      outputDiv.textContent = 'جاري تحليل البيانات الصحية...';
  try {
          const prompt = `قم بتحليل البيانات الصحية التالية وتقديم توصيات: ${input}`;
        const result = await geminiRequest(prompt);
          outputDiv.innerHTML = `<strong>تحليل البيانات الصحية:</strong><br>${result}`;
      }
      catch(error){
          outputDiv.innerHTML = `<strong>حدث خطأ أثناء تحليل البيانات الصحية:</strong><br> ${error.message}`;
       }
 };
  window.generateNewsletter = async function() {
      const input = document.getElementById('newsletter-input').value.trim();
       const outputDiv = document.getElementById('newsletter-output');
     if (!input) {
          outputDiv.textContent = 'الرجاء إدخال نص الرسالة الإخبارية.';
         return;
       }
      outputDiv.textContent = 'جاري إنشاء الرسالة الإخبارية...';
    try {
           const prompt = `قم بإنشاء رسالة إخبارية احترافية بناءً على النص التالي: ${input}`;
         const result = await geminiRequest(prompt);
          outputDiv.innerHTML = `<strong>الرسالة الإخبارية:</strong><br>${result}`;
      }
     catch(error){
            outputDiv.innerHTML = `<strong>حدث خطأ أثناء إنشاء الرسالة الإخبارية:</strong><br> ${error.message}`;
      }
 };
 window.analyzePersonalFinance = async function() {
      const input = document.getElementById('finance-input').value.trim();
       const outputDiv = document.getElementById('finance-output');
     if (!input) {
          outputDiv.textContent = 'الرجاء إدخال البيانات المالية.';
         return;
       }
    outputDiv.textContent = 'جاري تحليل البيانات المالية...';
     try {
           const prompt = `قم بتحليل البيانات المالية الشخصية التالية وتقديم توصيات: ${input}`;
          const result = await geminiRequest(prompt);
             outputDiv.innerHTML = `<strong>تحليل البيانات المالية:</strong><br>${result}`;
      }
     catch(error){
           outputDiv.innerHTML = `<strong>حدث خطأ أثناء تحليل البيانات المالية:</strong><br> ${error.message}`;
         }
 };
 window.generateLegalDocument = async function() {
     const input = document.getElementById('legal-input').value.trim();
      const outputDiv = document.getElementById('legal-output');
     if (!input) {
          outputDiv.textContent = 'الرجاء إدخال تفاصيل الوثيقة القانونية.';
          return;
      }
       outputDiv.textContent = 'جاري إنشاء الوثيقة القانونية...';
     try {
           const prompt = `قم بإنشاء وثيقة قانونية بناءً على التفاصيل التالية: ${input}`;
           const result = await geminiRequest(prompt);
              outputDiv.innerHTML = `<strong>الوثيقة القانونية:</strong><br>${result}`;
       }
      catch(error){
             outputDiv.innerHTML = `<strong>حدث خطأ أثناء إنشاء الوثيقة القانونية:</strong><br> ${error.message}`;
       }
 };
  window.analyzeSocialMedia = async function() {
        const input = document.getElementById('social-input').value.trim();
          const outputDiv = document.getElementById('social-output');
       if (!input) {
            outputDiv.textContent = 'الرجاء إدخال بيانات وسائل التواصل الاجتماعي.';
              return;
         }
       outputDiv.textContent = 'جاري تحليل البيانات الاجتماعية...';
   try {
             const prompt = `قم بتحليل بيانات وسائل التواصل الاجتماعي التالية: ${input}`;
             const result = await geminiRequest(prompt);
           outputDiv.innerHTML = `<strong>تحليل البيانات الاجتماعية:</strong><br>${result}`;
       }
   catch(error){
          outputDiv.innerHTML = `<strong>حدث خطأ أثناء تحليل البيانات الاجتماعية:</strong><br> ${error.message}`;
      }
  };
  window.generateResume = async function() {
       const input = document.getElementById('resume-input').value.trim();
       const template = document.getElementById('template-select').value;
       const outputDiv = document.getElementById('resume-output');

        if (!input) {
            outputDiv.textContent = 'الرجاء إدخال معلوماتك الشخصية والمهنية.';
            return;
        }
        outputDiv.textContent = 'جاري إنشاء السيرة الذاتية وخطاب التقديم...';
    try {
      const prompt = `قم بإنشاء سيرة ذاتية وخطاب تقديم احترافي بناءً على المعلومات التالية، باستخدام قالب ${template}: ${input}`;
       const result = await geminiRequest(prompt);
       outputDiv.innerHTML = `<strong>السيرة الذاتية وخطاب التقديم:</strong><br>${result}`;

    }
     catch(error){
            outputDiv.innerHTML = `<strong>حدث خطأ أثناء إنشاء السيرة الذاتية وخطاب التقديم:</strong><br> ${error.message}`;
        }
  };

    window.generateHtmlCode = async function() {
        const websiteType = document.getElementById('website-type').value;
        const components = Array.from(document.querySelectorAll('input[name="components"]:checked')).map(c => c.value);
        const colors = document.getElementById('colors').value;
        const fonts = document.getElementById('fonts').value;
        const content = document.getElementById('content').value;
        const cssOption = document.querySelector('input[name="css_option"]:checked')?.value;
        const inlineCssCode = document.getElementById('inline-css-code').value;
        const externalCssFile = document.getElementById('external-css-file').value;
        const outputDiv = document.getElementById('html-output');
        const downloadButton = document.getElementById('download-html');

        if (!websiteType || components.length === 0 || !content) {
            outputDiv.textContent = 'الرجاء إدخال جميع المواصفات المطلوبة.';
            return;
        }

        outputDiv.textContent = 'جاري إنشاء كود HTML...';

        try {
            let prompt = `أنشئ كود HTML ل${websiteType} يتضمن `;
            if (components.length > 0) {
                prompt += components.join(', ') + ' كمكونات أساسية. ';
            }
            prompt += `استخدم الألوان ${colors} والخطوط ${fonts}. المحتوى هو: ${content}. `;

            if (cssOption === 'inline' && inlineCssCode) {
                prompt += `أضف CSS مدمج: ${inlineCssCode}. `;
            } else if (cssOption === 'external' && externalCssFile) {
                prompt += `استخدم ملف CSS خارجي من الرابط: ${externalCssFile}. `;
            }

            prompt += "أضف تعليقات داخل الكود لشرح كل قسم، ودعم اللغة العربية.";

            const generatedHTML = await geminiRequest(prompt);

            // Example for contact page with simple form and link back to homepage
            if (websiteType === 'contact') {
                const exampleHTML = `
                    <!-- بداية صفحة التواصل -->
                    <!DOCTYPE html>
                    <html lang="ar" dir="rtl">
                    <head>
                        <meta charset="UTF-8">
                        <title>تواصل معنا</title>
                        <!-- إضافة CSS مدمج لتخصيص التصميم -->
                        <style>
                            body { font-family: Arial, sans-serif; }
                            .container { width: 80%; margin: auto; text-align: center; }
                            input[type="text"], textarea { width: 100%; padding: 10px; margin: 5px 0; }
                            button { padding: 10px 20px; background-color: #007bff; color: white; border: none; }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <h1>تواصل معنا</h1>
                            <!-- نموذج الاتصال -->
                            <form>
                                <input type="text" placeholder="اسمك"><br>
                                <input type="text" placeholder="بريدك الإلكتروني"><br>
                                <textarea placeholder="رسالتك"></textarea><br>
                                <button type="submit">إرسال</button>
                            </form>
                            <!-- رابط للعودة للصفحة الرئيسية -->
                            <p><a href="index.html">العودة إلى الصفحة الرئيسية</a></p>
                        </div>
                    </body>
                    </html>
                    <!-- نهاية صفحة التواصل -->
                `;
                outputDiv.textContent = exampleHTML;
                downloadButton.style.display = 'inline-block';
            } else {
                outputDiv.textContent = generatedHTML;
                downloadButton.style.display = 'inline-block';
            }

        } catch (error) {
            outputDiv.innerHTML = `<strong>حدث خطأ أثناء إنشاء كود HTML:</strong><br> ${error.message}`;
        }
    };

    document.querySelectorAll('input[name="css_option"]').forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'inline') {
                document.getElementById('inline-css-code').style.display = 'block';
                document.getElementById('external-css-file').style.display = 'none';
            } else if (this.value === 'external') {
                document.getElementById('inline-css-code').style.display = 'none';
                document.getElementById('external-css-file').style.display = 'block';
            }
        });
    });

    document.getElementById('download-html').addEventListener('click', function() {
        const content = document.getElementById('html-output').textContent;
        const filename = 'generated_code.html';
        const blob = new Blob([content], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
});
