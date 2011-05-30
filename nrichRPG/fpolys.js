/*
	fpolys.js - polynomials with fractions
*/

// write a fractional coefficient
function fcoeff(f, t)
{
	if(f.top==f.bot)
		return(t);
	if(f.top==-f.bot)
		return("-"+t);
	if(f.top==0)
		return("");
	return(f.write()+t);
}

// write a fractional coefficient's modulus
function fbcoeff(f, t)
{
	var g=new frac(Math.abs(f.top), Math.abs(f.bot));
	if(g.top==g.bot)
		return(t);
	if(g.top==0)
		return("");
	return(g.write()+t);
}

// Polynomial over Q
function fpoly(rank)
{
	this.rank=rank;
	this.terms=function()
	{
		var n=0;
		for(var i=0;i<=this.rank;i++) if(this[i]) n++;
		return n;
	}
	this.set=function()
	{
		this.rank=this.set.arguments.length-1;
		for(var i=0;i<=this.rank;i++) this[i]=this.set.arguments[i];
	}
	this.setrand=function(maxentry)
	{
		for(var i=0;i<=this.rank;i++) this[i]=randfrac(12);
		if(this[this.rank].top==0) this[this.rank].top=maxentry;
		this[this.rank].reduce();
	}
	this.setpoly=function(a) // set from a poly (over Z) object
	{
		this.rank=a.rank;
		for(var i=0;i<=this.rank;i++) this[i]=new frac(a[i], 1);
	}
	this.compute=function(x)
	{
		if(typeof(x)!='frac')
			x=new frac(x, 1);
		var y=new frac(0, 1);
		for(var i=0;i<=this.rank;i++)
			y.add(this[i].top*Math.pow(x.top, i), this[i].bot*Math.pow(x.bot, i));
		y.reduce();
		return y;
	}
	this.gcd=function()
	{
		var g=frac(0, 1);
		for(var i=0;i<this.rank;i++) g.bot*=this[i].bot;
		var a=this[this.rank].top*g.bot/this[this.rank].bot;
		for(var i=0;i<this.rank;i++) a=gcd(a, this[i].top*g.bot/this[i].bot);
		g.reduce();
		return g;
	}
	this.xthru=function(x)
	{
		for(var i=0;i<=this.rank;i++)
		{
			this[i].prod(x);
		}
	}
	this.diff=function(d)
	{
		d.rank=rank-1;
		for(var i=0;i<this.rank;i++)
		{
			d[i]=this[i+1];
			d[i].prod(frac(i+1, 1));
		}
	}
	this.integ=function(d)
	{
		d.rank=this.rank+1;
		d[0]=new frac();
		for(var i=0;i<=this.rank;i++)
		{
			d[i+1]=this[i];
			d[i+1].bot*=(i+1);
			d[i+1].reduce();
		}
	}
	this.write=function()
	{
		var q="";
		var j=false;
		for(var i=this.rank;i>=0;i--)
		{
			var val=this[i].top/this[i].bot;
			if(val<0)
			{
				if(j) q+=' ';
				q+='- ';
				j=false;
			}
			else if(j&&val)
			{
				q+=' + ';
				j=false;
			}
			if(val)
			{
				var a=new frac(Math.abs(this[i].top), this[i].bot);
				switch(i)
				{
					case 0:
						q+=a.write(); j=true;
					break;
					case 1:
						if(a.top==a.bot)
							q+='x';
						else
							q+=a.write()+'x';
						j=true;
					break;
					default:
						if(a.top==a.bot)
							q+='x^'+i;
						else
							q+=a.write()+'x^'+i;
						j=true;
					break;
				}
			}
		}
		return q;
	}
	this.rwrite=function()
	{
		var q="";
		var j=false;
		for(var i=0;i<=this.rank;i++)
		{
			var val=this[i].top/this[i].bot;
			if(val<0)
			{
				if(j) q+=' ';
				q+='- ';
				j=false;
			}
			else if(j&&val)
			{
				q+=' + ';
				j=false;
			}
			if(val)
			{
				var a=new frac(Math.abs(this[i].top), this[i].bot);
				switch(i)
				{
					case 0:
						q+=a.write(); j=true;
					break;
					case 1:
						if(a.top==a.bot)
							q+='x';
						else
							q+=a.write()+'x';
						j=true;
					break;
					default:
						if(a.top==a.bot)
							q+='x^'+i;
						else
							q+=a.write()+'x^'+i;
						j=true;
					break;
				}
			}
		}
		return q;
	}
}
