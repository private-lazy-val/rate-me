(()=>{"use strict";var __webpack_modules__={627:()=>{eval("\nvar evaluatePopup = document.querySelector('.rate-me');\nvar submitBtn = evaluatePopup.querySelector('.rate-me__btn');\nvar thankYouCard = document.querySelector('.thank-you');\nvar thankYouResult = document.querySelector('.thank-you__result');\nvar selectedRating = null;\nfunction unselectAllCircles() {\n  var circles = evaluatePopup.querySelectorAll('.rate-me__circle_mark, .rate-me__circle_highest-mark');\n  circles.forEach(function (circle) {\n    circle.classList.remove('rate-me__circle_clr_gray');\n    circle.classList.remove('rate-me__circle_clr_orange');\n  });\n}\nvar disableBtn = function disableBtn(buttonElement) {\n  buttonElement.disabled = true;\n  buttonElement.classList.add('rate-me__btn_disabled');\n};\ndisableBtn(submitBtn);\nvar enableBtn = function enableBtn(buttonElement) {\n  buttonElement.disabled = false;\n  buttonElement.classList.remove('rate-me__btn_disabled');\n};\nevaluatePopup.addEventListener('click', function (e) {\n  unselectAllCircles();\n  if (e.target.classList.contains('rate-me__circle_mark')) {\n    selectedRating = parseInt(e.target.textContent, 10);\n    e.target.classList.add('rate-me__circle_clr_gray');\n    enableBtn(submitBtn);\n  } else if (e.target.classList.contains('rate-me__circle_highest-mark')) {\n    selectedRating = parseInt(e.target.textContent, 10);\n    e.target.classList.add('rate-me__circle_clr_orange');\n    enableBtn(submitBtn);\n  } else if (e.target !== submitBtn) {\n    disableBtn(submitBtn);\n  }\n});\nsubmitBtn.addEventListener('click', function (e) {\n  e.preventDefault();\n  if (selectedRating === null) {\n    console.log('No rating selected');\n    return;\n  }\n  if (selectedRating > 0) {\n    sendRating(selectedRating).then(function () {\n      thankYouResult.textContent = \"You selected \".concat(selectedRating, \" out of 5\");\n      thankYouCard.style.display = 'flex';\n      evaluatePopup.style.display = 'none';\n    }).catch(function (err) {\n      return console.log(\"Error: \".concat(err));\n    });\n  }\n});\nvar config = {\n  baseUrl: \"http://localhost:3000/ratings\",\n  headers: {\n    \"Content-Type\": \"application/json\"\n  }\n};\nvar onResponse = function onResponse(res) {\n  return res.ok ? res.json() : Promise.reject(\"Error: \".concat(res.status));\n};\nfunction sendRating(mark) {\n  return fetch(\"\".concat(config.baseUrl), {\n    method: \"POST\",\n    headers: config.headers,\n    body: JSON.stringify({\n      mark: mark\n    })\n  }).then(onResponse);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ21CLFdBQVcsbUJBQUFNLE1BQUEsQ0FBbUJ4QixjQUFjLGNBQVc7TUFDdEVGLFlBQVksQ0FBQzJCLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE1BQU07TUFDbkNoQyxhQUFhLENBQUMrQixLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0lBQ3RDLENBQUMsQ0FBQyxDQUFDQyxLQUFLLENBQUMsVUFBQ0MsR0FBRztNQUFBLE9BQUtSLE9BQU8sQ0FBQ0MsR0FBRyxXQUFBRyxNQUFBLENBQVdJLEdBQUcsQ0FBRSxDQUFDO0lBQUEsRUFBQztFQUNuRDtBQUNGLENBQUMsQ0FBQztBQUVGLElBQU1DLE1BQU0sR0FBRztFQUNiQyxPQUFPLEVBQUUsK0JBQStCO0VBQ3hDQyxPQUFPLEVBQUU7SUFDUCxjQUFjLEVBQUU7RUFDbEI7QUFDRixDQUFDO0FBQ0QsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUlDLEdBQUcsRUFBSztFQUMxQixPQUFPQSxHQUFHLENBQUNDLEVBQUUsR0FBR0QsR0FBRyxDQUFDRSxJQUFJLENBQUMsQ0FBQyxHQUFHQyxPQUFPLENBQUNDLE1BQU0sV0FBQWIsTUFBQSxDQUFXUyxHQUFHLENBQUNLLE1BQU0sQ0FBRSxDQUFDO0FBQ3JFLENBQUM7QUFFRCxTQUFTaEIsVUFBVUEsQ0FBQ2lCLElBQUksRUFBRTtFQUN4QixPQUFPQyxLQUFLLElBQUFoQixNQUFBLENBQUlLLE1BQU0sQ0FBQ0MsT0FBTyxHQUFJO0lBQ2hDVyxNQUFNLEVBQUUsTUFBTTtJQUNkVixPQUFPLEVBQUVGLE1BQU0sQ0FBQ0UsT0FBTztJQUN2QlcsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQztNQUFDTCxJQUFJLEVBQUpBO0lBQUksQ0FBQztFQUM3QixDQUFDLENBQUMsQ0FDQ2hCLElBQUksQ0FBQ1MsVUFBVSxDQUFDO0FBQ3JCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmF0ZV9tZS8uL3NyYy9wYWdlcy9pbmRleC5qcz80NTcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG5jb25zdCBldmFsdWF0ZVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhdGUtbWUnKTtcbmNvbnN0IHN1Ym1pdEJ0biA9IGV2YWx1YXRlUG9wdXAucXVlcnlTZWxlY3RvcignLnJhdGUtbWVfX2J0bicpO1xuY29uc3QgdGhhbmtZb3VDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRoYW5rLXlvdScpO1xuY29uc3QgdGhhbmtZb3VSZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGhhbmsteW91X19yZXN1bHQnKTtcblxubGV0IHNlbGVjdGVkUmF0aW5nID0gbnVsbDtcblxuZnVuY3Rpb24gdW5zZWxlY3RBbGxDaXJjbGVzICgpIHtcbiAgY29uc3QgY2lyY2xlcyA9IGV2YWx1YXRlUG9wdXAucXVlcnlTZWxlY3RvckFsbCgnLnJhdGUtbWVfX2NpcmNsZV9tYXJrLCAucmF0ZS1tZV9fY2lyY2xlX2hpZ2hlc3QtbWFyaycpO1xuICBjaXJjbGVzLmZvckVhY2goY2lyY2xlID0+IHtcbiAgICBjaXJjbGUuY2xhc3NMaXN0LnJlbW92ZSgncmF0ZS1tZV9fY2lyY2xlX2Nscl9ncmF5Jyk7XG4gICAgY2lyY2xlLmNsYXNzTGlzdC5yZW1vdmUoJ3JhdGUtbWVfX2NpcmNsZV9jbHJfb3JhbmdlJyk7XG4gIH0pO1xufVxuXG5jb25zdCBkaXNhYmxlQnRuID0gKGJ1dHRvbkVsZW1lbnQpID0+IHtcbiAgYnV0dG9uRWxlbWVudC5kaXNhYmxlZCA9IHRydWU7XG4gIGJ1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncmF0ZS1tZV9fYnRuX2Rpc2FibGVkJyk7XG59XG5cbmRpc2FibGVCdG4oc3VibWl0QnRuKTtcblxuY29uc3QgZW5hYmxlQnRuID0gKGJ1dHRvbkVsZW1lbnQpID0+IHtcbiAgYnV0dG9uRWxlbWVudC5kaXNhYmxlZCA9IGZhbHNlO1xuICBidXR0b25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3JhdGUtbWVfX2J0bl9kaXNhYmxlZCcpO1xufVxuZXZhbHVhdGVQb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuXG4gIHVuc2VsZWN0QWxsQ2lyY2xlcygpO1xuXG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3JhdGUtbWVfX2NpcmNsZV9tYXJrJykpIHtcbiAgICBzZWxlY3RlZFJhdGluZyA9IHBhcnNlSW50KGUudGFyZ2V0LnRleHRDb250ZW50LCAxMCk7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgncmF0ZS1tZV9fY2lyY2xlX2Nscl9ncmF5Jyk7XG5cbiAgICBlbmFibGVCdG4oc3VibWl0QnRuKTtcblxuICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncmF0ZS1tZV9fY2lyY2xlX2hpZ2hlc3QtbWFyaycpKSB7XG4gICAgc2VsZWN0ZWRSYXRpbmcgPSBwYXJzZUludChlLnRhcmdldC50ZXh0Q29udGVudCwgMTApO1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3JhdGUtbWVfX2NpcmNsZV9jbHJfb3JhbmdlJyk7XG5cbiAgICBlbmFibGVCdG4oc3VibWl0QnRuKTtcblxuICB9IGVsc2UgaWYgKGUudGFyZ2V0ICE9PSBzdWJtaXRCdG4pIHtcbiAgICBkaXNhYmxlQnRuKHN1Ym1pdEJ0bik7XG4gIH1cbn0pXG5cbnN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGlmIChzZWxlY3RlZFJhdGluZyA9PT0gbnVsbCkge1xuICAgIGNvbnNvbGUubG9nKCdObyByYXRpbmcgc2VsZWN0ZWQnKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHNlbGVjdGVkUmF0aW5nID4gMCkge1xuICAgIHNlbmRSYXRpbmcoc2VsZWN0ZWRSYXRpbmcpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoYW5rWW91UmVzdWx0LnRleHRDb250ZW50ID0gYFlvdSBzZWxlY3RlZCAke3NlbGVjdGVkUmF0aW5nfSBvdXQgb2YgNWA7XG4gICAgICAgIHRoYW5rWW91Q2FyZC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICBldmFsdWF0ZVBvcHVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9KS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhgRXJyb3I6ICR7ZXJyfWApKTtcbiAgfVxufSk7XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgYmFzZVVybDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvcmF0aW5nc1wiLFxuICBoZWFkZXJzOiB7XG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gIH0sXG59O1xuY29uc3Qgb25SZXNwb25zZSA9IChyZXMpID0+IHtcbiAgcmV0dXJuIHJlcy5vayA/IHJlcy5qc29uKCkgOiBQcm9taXNlLnJlamVjdChgRXJyb3I6ICR7cmVzLnN0YXR1c31gKTtcbn07XG5cbmZ1bmN0aW9uIHNlbmRSYXRpbmcobWFyaykge1xuICByZXR1cm4gZmV0Y2goYCR7Y29uZmlnLmJhc2VVcmx9YCwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczogY29uZmlnLmhlYWRlcnMsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe21hcmt9KSxcbiAgfSlcbiAgICAudGhlbihvblJlc3BvbnNlKVxufVxuIl0sIm5hbWVzIjpbImV2YWx1YXRlUG9wdXAiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdWJtaXRCdG4iLCJ0aGFua1lvdUNhcmQiLCJ0aGFua1lvdVJlc3VsdCIsInNlbGVjdGVkUmF0aW5nIiwidW5zZWxlY3RBbGxDaXJjbGVzIiwiY2lyY2xlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiY2lyY2xlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiZGlzYWJsZUJ0biIsImJ1dHRvbkVsZW1lbnQiLCJkaXNhYmxlZCIsImFkZCIsImVuYWJsZUJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwiY29udGFpbnMiLCJwYXJzZUludCIsInRleHRDb250ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwic2VuZFJhdGluZyIsInRoZW4iLCJjb25jYXQiLCJzdHlsZSIsImRpc3BsYXkiLCJjYXRjaCIsImVyciIsImNvbmZpZyIsImJhc2VVcmwiLCJoZWFkZXJzIiwib25SZXNwb25zZSIsInJlcyIsIm9rIiwianNvbiIsIlByb21pc2UiLCJyZWplY3QiLCJzdGF0dXMiLCJtYXJrIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///627\n")}},__webpack_exports__={};__webpack_modules__[627]()})();