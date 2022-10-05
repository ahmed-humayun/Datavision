let catalog=
[
	{"code":"product1","name":"iPhone 12","image":"images/iphone12.jpg", "price": 799},
	{"code":"product2","name":"Samsung Galaxy S20","image":"images/galaxys20.jpg", "price": 799},
	{"code":"product3","name":"Google Pixel 4a","image":"images/pixel4a.jpg", "price": 349},
	{"code":"product4","name":"Dell XPS 13","image":"images/dellxps13.jpg", "price": 1699},
	{"code":"product5","name":"MacBook Pro","image":"images/macbookpro.jpg", "price": 2399},
	{"code":"product6","name":"HP Envy x360 13","image":"images/hpenvy.jpg", "price": 999},
	{"code":"product10","name":"Playstation 5","image":"images/ps5.jpg", "price": 499},
	{"code":"product11","name":"Xbox Series X","image":"images/xbox.jpg", "price": 499},
	{"code":"product12","name":"Nintendo Switch Lite","image":"images/nintendo.jpg", "price": 199}
]

function storecart()
{
	var flag=false,cart="",userid=getCookie("whoami")+"cart";
	for(var i=0;i<catalog.length;i++)
	{
		var qty=getCookie(catalog[i].code);
		if(qty>=1)
		{
			cart=cart+(catalog[i].code+":"+qty+"-");
			flag=true;
		}
	}
	if(flag==true)
	{
		cart=cart.substring(0,cart.length-1);
		setCookie(userid,cart,30);
	}
}

function loadcart()
{
	var cart=getCookie("whoami");
	if(cart!=null)
	{
		cart=cart+"cart";
		var items=getCookie(cart);
		if(items!=null)
		{
			items=items.split("-");
			for(var i=0;i<items.length;i++)
			{
				var item=items[i].split(":");
				setCookie(item[0],item[1],30);
			}
		}
	}
}
