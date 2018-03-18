

     const img_con = document.getElementById('img-con'); 
	 const next = document.getElementById('next');
	 const prev = document.getElementById('prev');

	  const images = ['a.jpeg', 'b.jpeg', 'c.jpeg', 'd.jpeg', 'e.jpeg']

	  let i = images.length;


    // function for next slide 

    next.onclick = ()=> {
    	 i = (i<images.length) ?(i= i+1):(i=1);
    	 img_con.innerHTML = "<img class='img' src=images/"+images[i-1]+">";
    }
       

    // function for prew slide
    
    prev.onclick = ()=> {
    	 i = (i<images.length+1 && i>1) ?(i= i-1):(i=images.length);
    	 img_con.innerHTML = "<img class='img' src=images/"+images[i-1]+">";
    }