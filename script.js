
fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    data.forEach((time, index)  => {
      // got the grid item div
    const divitem =  document.createElement('div')
    // add the style
    divitem.classList.add('grid-item', time.title)
  //  get the image div
    const imgdiv = document.createElement('div')
    imgdiv.classList.add('img-div', `cover${index+1}` )
      
    const images = document.createElement('img')
    images.src= './images/icon-social.svg'
      
    images.classList.add('logo')
    // adding the image div to the image
    imgdiv.appendChild(images)
    
    
    divitem.appendChild(imgdiv)
   
    images.style.width = '30px';

    // getting worklogdiv
    const worklogo = document.createElement('div')
    worklogo.classList.add('worklogo')
    //  gettinh h3 div
    const  h3div =document.createElement('h3')
    const divElement = document.createElement('div');
    divElement.appendChild(h3div)
    h3div.innerText = time.title;
   
   
    worklogo.appendChild(divElement)
   divitem.appendChild(worklogo)
    //  getting the logo
   const  ourlogo = document.createElement('div')
   const logoimg = document.createElement('img')
   logoimg.src= './images/icon-ellipsis.svg'
   
   logoimg.classList.add('logo')
   ourlogo.appendChild(logoimg)
   worklogo.appendChild(ourlogo)
// getting the h2
   const hours = document.createElement('h2')
   hours.classList.add('hours')
   hours.innerText= time.timeframes.weekly.current
   divitem.appendChild(hours)
  //  getting the p
const textp = document.createElement('p')
textp.innerText = `last week - ${time.timeframes.weekly.previous} hrs `
divitem.appendChild(textp)
  console.log(divitem);
  const  container = document.querySelector('.container')
  container.appendChild(divitem)
  
    });
   
  })