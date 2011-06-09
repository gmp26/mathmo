
var Complex = new complex; // prototypical Complex object that lets us get the methods

// complex number object: set or get it in Re/Im or r/theta, write it in LaTeX
function complex(Re, Im)
{
	this.Re=Re;
	this.Im=Im;
	this.set=function(Re, Im)
	{
		this.Re=Re;
		this.Im=Im;
		return(this);
	}
	this.ptoc=function(Mod, Arg)
	{
		var z=new complex;
		z.Re=Mod*Math.cos(Arg);
		z.Im=Mod*Math.sin(Arg);
		return(z);
	}
	this.random=function(maxentry, rad)
	{
		var z=new complex;
		z=Complex.ptoc(rand(0, maxentry), Math.PI*rand(0, rad*2)/rad);
		return(z);
	}
	this.randnz=function(maxentry, rad)
	{
		var z=new complex;
		z=Complex.ptoc(rand(1, maxentry), Math.PI*rand(0, rad*2)/rad);
		return(z);
	}
	this.ctop=function(z)
	{
		if(typeof(z)=='undefined')
			z=this;
		var Mod=Math.sqrt(Math.pow(z.Re, 2)+Math.pow(z.Im, 2));
		var Arg=Math.atan2(z.Im, z.Re);
		return([Mod, Arg]);
	}
	this.isnull=function() {return !(this.Re||this.Im);};
	this.write=function()
	{
		var u=[guessExact(this.Re), guessExact(this.Im)];
		if(u[1]==0)
			return(u[0]);
		else if(u[0]==0)
		{
			return(ascoeff(u[1])+"i");
		}
		else
		{
			return((u[0]+" + "+ascoeff(u[1])+"i").replace(/\+ \-/g, '-'));
		}
	}
	this.add=function(u, v)
	{
		var w=new complex(this.Re+u, this.Im+v);
		return(w);
	}
	this.times=function(u, v)
	{
		var w=new complex(this.Re*u - this.Im*v, this.Re*v + this.Im*u);
		return(w);
	}
	this.divide=function(u, v)
	{
		var d=Math.pow(u, 2)+Math.pow(v, 2);
		var w=new complex((u*this.Re+v*this.Im)/d, (u*this.Im-v*this.Re)/d);
		return(w);
	}
	this.equals=function(u, v)
	{
		return(this.Re==u&&this.Im==v);
	}
}

// polynomial (over C) object: can be set manually or randomly, nonzero terms counted, computed at a z value, multiplied by a constant, differentiated, write it in latex
// REMEMBER: it's stored backwards (x^0 term first)
function c_poly(rank)
{
	this.rank=rank;
	this.terms=function()
	{
		var n=0;
		for(var i=0;i<=this.rank;i++) if(!this[i].isnull) n++;
		return n;
	}
	this.set=function()
	{
		this.rank=this.set.arguments.length-1;
		for(var i=0;i<=this.rank;i++) this[i]=this.set.arguments[i];
	}
	this.setrand=function(maxentry, rad)
	{
		for(var i=0;i<=this.rank;i++)
		{
			this[i]=Complex.random(maxentry, rad);
		}
		if(this[this.rank].isnull()) this[this.rank].set(1, 0);
	}
	this.compute=function(z)
	{
		var y=new complex(0, 0);
		var zp=z.ctop();
		for(var i=0;i<=this.rank;i++) 
		{
			var zi=Complex.ptoc(Math.pow(zp[0], i), zp[1]*i);
			y=y.add(zi[0], zi[1]);
		}
		return y;
	}
	/*this.gcd=function() // TODO complex gcd() using Gaussian integers stuff
	{
		var a=this[this.rank];
		for(var i=0;i<this.rank;i++) a=gcd(a, this[i]);
		return a;
	}*/
	this.xthru=function(z)
	{
		for(var i=0;i<=this.rank;i++)
		{
			this[i]=(this[i].times(z.Re, z.Im));
		}
	}
	this.addp=function(x)
	{
		for(var i=0;i<=this.rank;i++)
		{
			this[i]=this[i].add(x[i].Re, x[i].Im);
		}
	}
	this.diff=function(d)
	{
		d.rank=rank-1;
		for(var i=0;i<this.rank;i++) d[i]=this[i+1].times(i+1, 0);
	}
	this.integ=function(d)
	{
		d.rank=rank+1;
		for(var i=0;i<this.rank;i++) d[i+1]=this[i].divide(i+1, 0);
	}
	this.write=function(l) // l is the letter (or string) for the independent variable.  If not given, defaults to z
	{
		if(typeof(l)=='undefined')
		{
			l='z';
		}
		var q="";
		var j=false;
		for(var i=this.rank;i>=0;i--)
		{
			if(!this[i].isnull())
			{
				if(j)
				{
					if((this[i].Im==0 && this[i].Re<0) || (this[i].Re==0 && this[i].Im<0))
						q+=' - '
					else
						q+=' + ';
					j=false;
				}
				switch(i)
				{
					case 0:
						q+=this[i].write(); j=true;
					break;
					case 1:
						if(this[i].equals(1, 0) || this[i].equals(-1, 0))
							q+=l;
						else if(this[i].equals(0, 1) || this[i].equals(0, -1))
							q+="i"+l;
						else if(this[i].Im==0 && this[i].Re<0)
							q+=Math.abs(this[i].Re)+l;
						else if(this[i].Re==0 && this[i].Im<0)
							q+=Math.abs(this[i].Im)+"i"+l;
						else
							q+="("+this[i].write()+")"+l;
						j=true;
					break;
					default:
						if(this[i].equals(1, 0) || this[i].equals(-1, 0))
							q+=l+"^"+i;
						else if(this[i].equals(0, 1) || this[i].equals(0, -1))
							q+="i"+l+"^"+i;
						else if(this[i].Im==0 && this[i].Re<0)
							q+=Math.abs(this[i].Re)+l+"^"+i;
						else if(this[i].Re==0 && this[i].Im<0)
							q+=Math.abs(this[i].Im)+"i"+l+"^"+i;
						else
							q+="("+this[i].write()+")"+l+"^"+i;
						j=true;
					break;
				}
			}
		}
		return q;
	}
	this.rwrite=function(l) // l is the letter (or string) for the independent variable.  If not given, defaults to z
	{
		if(typeof(l)=='undefined')
		{
			l='z';
		}
		var q="";
		var j=false;
		for(var i=0;i<=this.rank;i++)
		{
			if(!this[i].isnull())
			{
				if(j)
				{
					if((this[i].Im==0 && this[i].Re<0) || (this[i].Re==0 && this[i].Im<0))
						q+=' - '
					else
						q+=' + ';
					j=false;
				}
				switch(i)
				{
					case 0:
						q+=this[i].write(); j=true;
					break;
					case 1:
						if(this[i].equals(1, 0) || this[i].equals(-1, 0))
							q+=l;
						else if(this[i].equals(0, 1) || this[i].equals(0, -1))
							q+="i"+l;
						else if(this[i].Im==0 && this[i].Re<0)
							q+=Math.abs(this[i].Re)+l;
						else if(this[i].Re==0 && this[i].Im<0)
							q+=Math.abs(this[i].Im)+"i"+l;
						else
							q+="("+this[i].write()+")"+l;
						j=true;
					break;
					default:
						if(this[i].equals(1, 0) || this[i].equals(-1, 0))
							q+=l+"^"+i;
						else if(this[i].equals(0, 1) || this[i].equals(0, -1))
							q+="i"+l+"^"+i;
						else if(this[i].Im==0 && this[i].Re<0)
							q+=Math.abs(this[i].Re)+l+"^"+i;
						else if(this[i].Re==0 && this[i].Im<0)
							q+=Math.abs(this[i].Im)+"i"+l+"^"+i;
						else
							q+="("+this[i].write()+")"+l+"^"+i;
						j=true;
					break;
				}
			}
		}
		return q;
	}
}
