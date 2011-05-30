/*
	polys.js - polynomials
*/

// Write a number as a coefficient (1 disappears, -1 becomes -)
function ascoeff(a)
{
	if(a==1)
		return("");
	if(a==-1)
		return("-");
	return(a);
}

// Write a number as a |coefficient| (+-1 disappears)
function abscoeff(a)
{
	a=Math.abs(a);
	if(a==1)
		return("");
	return(a);
}

// Express a list of polynomial factors (x+a[0])(x+a[1])...
function express(a)
{
	var r="";
	var n=a.length;
	var p=ranking(a);
	var q;
	var t=0;
	s=new poly(1);
	s[1]=1;
	for(var i=0;i<n;i++)
	{
		if(i && a[p[i]]==q)
		{
			t++;
		}
		else
		{
			if(t)
				r+="^"+(t+1);
			t=0;
			s[0]=a[p[i]];
			r+='('+s.write()+')';
			q=a[p[i]];
		}
	}
	if(t)
		r+="^"+(t+1);
	return(r)
}

function polyexpand(a, b)
{
	p=new poly(a.rank+b.rank);
	p.setrand(0); // set all entries to 0
	for(var i=0;i<=a.rank;i++)
	{
		for(var j=0;j<=b.rank;j++)
		{
			p[i+j]+=a[i]*b[j];
		}
	}
	return p;
}

function p_quadratic(a, b, c)
{
	p=new poly(2);
	p.set(c, b, a);
	return p; // = ax^2 + bx + c
}

function p_linear(a, b)
{
	p=new poly(1);
	p.set(b, a);
	return p; // = ax + b
}

function p_const(a)
{
	p=new poly(0);
	p.set(a);
	return p; // = a
}

// polynomial (over Z) object: can be set manually or randomly, nonzero terms counted, computed at an x value, multiplied by a constant, differentiated, write it in latex, used in several other functions
// REMEMBER: it's stored backwards (x^0 term first)
function poly(rank)
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
		for(var i=0;i<=this.rank;i++) this[i]=Math.round(-maxentry+2*maxentry*Math.random());
		if(this[this.rank]==0) this[this.rank]=maxentry;
	}
	this.compute=function(x)
	{
		var y=0;
		for(var i=0;i<=this.rank;i++) y+=this[i]*Math.pow(x, i);
		return y;
	}
	this.gcd=function()
	{
		var a=this[this.rank];
		for(var i=0;i<this.rank;i++) a=gcd(a, this[i]);
		return a;
	}
	this.xthru=function(x)
	{
		for(var i=0;i<=this.rank;i++)
		{
			this[i]=(this[i]*x);
		}
	}
	this.addp=function(x)
	{
		for(var i=0;i<=this.rank;i++)
		{
			this[i]=this[i]+x[i];
		}
	}
	this.diff=function(d)
	{
		d.rank=rank-1;
		for(var i=0;i<this.rank;i++) d[i]=this[i+1]*(i+1);
	}
	this.integ=function(d)
	{
		d.rank=rank+1;
		for(var i=0;i<this.rank;i++) d[i+1]=this[i]/(i+1);
	}
	this.write=function(l) // l is the letter (or string) for the independent variable.  If not given, defaults to x
	{
		if(typeof(l)=='undefined')
		{
			l='x';
		}
		var q="";
		var j=false;
		for(var i=this.rank;i>=0;i--)
		{
			if(this[i]<0)
			{
				if(j) q+=' ';
				q+='- ';
				j=false;
			}
			else if(j&&this[i])
			{
				q+=' + ';
				j=false;
			}
			if(this[i])
			{
				switch(i)
				{
					case 0:
						q+=Math.abs(this[i]); j=true;
					break;
					case 1:
						if(Math.abs(this[i])==1)
							q+=l;
						else
							q+=Math.abs(this[i])+l;
						j=true;
					break;
					default:
						if(Math.abs(this[i])==1)
							q+=l+'^'+i;
						else
							q+=Math.abs(this[i])+l+'^'+i;
						j=true;
					break;
				}
			}
		}
		return q;
	}
	this.rwrite=function(l)
	{
		if(typeof(l)=='undefined')
		{
			l='x';
		}
		var q="";
		var j=false;
		for(var i=0;i<=this.rank;i++)
		{
			if(this[i]<0)
			{
				if(j) q+=' ';
				q+='- ';
				j=false;
			}
			else if(j&&this[i])
			{
				q+=' + ';
				j=false;
			}
			if(this[i])
			{
				switch(i)
				{
					case 0:
						q+=Math.abs(this[i]); j=true;
					break;
					case 1:
						if(Math.abs(this[i])==1)
							q+=l;
						else
							q+=Math.abs(this[i])+l;
						j=true;
					break;
					default:
						if(Math.abs(this[i])==1)
							q+=l+'^'+i;
						else
							q+=Math.abs(this[i])+l+'^'+i;
						j=true;
					break;
				}
			}
		}
		return q;
	}
	/*
	this.gerwrite=function(l)
	{
		if(typeof(l)=='undefined')
		{
			l='x';
		}
		var q="";
		var j=false;
		for(var i=0;i<=this.rank;i++)
		{
			c=guessExact(this[i]);
			ac=guessExact(Math.abs(this[i]));
			if(this[i]<0)
			{
				if(j) q+=' ';
				q+='- ';
				j=false;
			}
			else if(j&&this[i])
			{
				q+=' + ';
				j=false;
			}
			if(this[i])
			{
				switch(i)
				{
					case 0:
						q+=ac; j=true;
					break;
					case 1:
						if(ac==1)
							q+=l;
						else
							q+=ac+l;
						j=true;
					break;
					default:
						if(ac==1)
							q+=l+'^'+i;
						else
							q+=ac+l+'^'+i;
						j=true;
					break;
				}
			}
		}
		return q;
	}
	*/
}
