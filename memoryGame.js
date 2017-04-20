function craeteTable()
{
	var imagesSrc = [];
	var img;
	var ROW= 6;
	var COL = 5;
	var moves=0; matches=0;
	for(var i = 1; i <= (ROW*COL)/2 ; i++)
	{
		img = i +".jpg";
		imagesSrc.push(img);
		imagesSrc.push(img);
	}
	random(imagesSrc);	
		
	var b= "<table>";
	for(var i=0 ; i< ROW; i++)
	{
		b+="<tr>";
		for(var j =0 ;j<COL;j++)
		{
			b+="<td>";
			b+="<img src = '"+imagesSrc[i*COL+j]+"'>";
			b+="</td>";
		}
		
		b+="</tr>";
	}
	b+="</table>";
	document.getElementById("table").innerHTML = b;
	$("img").hide();
	document.getElementById("moves").innerHTML = moves;
	document.getElementById("matches").innerHTML= matches;
}

function random(array)
{
	var currentIndex = array.length;
	var temporaryValue;
	var randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) 
  {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    --currentIndex;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
}


var loadPage = function()
 {
	 craeteTable();
	 var first,second;
	 var moves=0;
	 var matches=0;
	 var count = 0;
			
	$("td").click(function()
	{
		count++;
		if(count==1)
		{
			if(($(this).children("img").hasClass("shown")) === false)
			{
				$("img").not(".match").fadeOut(400);
				$("img").not(".match").removeClass("shown");
			
				$(this).children("img").show();
				$(this).children("img").addClass("shown");
				first = $(this).children("img").attr("src"); 
			}
			else
			{
					count=0;
			}
		}
		else if(count==2)
		{
			if(($(this).children("img").hasClass("shown")) === false)
			{
				moves++;
				$(this).children("img").fadeIn(200);
				$(this).children("img").addClass("shown");
				second = $(this).children("img").attr("src"); 
				if(first==second)
				{
					matches++;
					$("td").children("img[src='" + second + "']").addClass("match");
				}
				count=0;
			}
			else
			{
					count=1 ;
			}
			
		}
		
		document.getElementById("moves").innerHTML = moves;
		document.getElementById("matches").innerHTML = matches;
		
		if(matches==15)
		{
			setTimeout(function(){ alert("Game Over"); }, 500);
		}	
	});
	
	$("#cmdNewGame").click(function()
	{
		loadPage();
	});
	
}
