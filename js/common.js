const searchEL= document.querySelector('.search') //document 는 html 파일을 지칭한다.
const searchInputEL= searchEL .querySelector('input');//이미 찾은 요소에서 추가로 찾는다.

searchEL.addEventListener('click', function () {
  //검색 창에서 돋보기를 클릭했을 때도 검색창이 올바르게 늘어날 수 있도록
  //기존에는 돋보기 주변을 클릭해야 할 수 있었음
  searchInputEL.focus()
})
searchInputEL.addEventListener('focus', function () {
  //포커스가 확인되었을 때 search 클래스에 focused 클래스를 생성한다.
  //포커스가 된 상태임을 알려주는 용도
  searchEL.classList.add('focused')
  searchInputEL.setAttribute('placeholder','통합검색') //검색창에 힌트 제공
})
searchInputEL.addEventListener('blur', function () {
  //통합검색 힌트가 유지되지 않도록 블러
  searchEL.classList.add('focused')
  searchInputEL.setAttribute('placeholder','');
});

const  thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();