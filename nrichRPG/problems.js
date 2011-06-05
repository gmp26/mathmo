// nRich RPG (Randomised Problems Generator)


egfn=function(){};
egparms=0;

// Partial Fractions
function makePartial()
{
	function makePartial1()
	{
		var a=randnz(8);
		var b=new poly(1);b.setrand(8)
		if(b[1]<0)
		{
			b.xthru(-1);
			a=-a;
		}
		var e=gcd(a, b.gcd());
		if(e>1)
		{
			b.xthru(1/e);
			a/=e;
		}
		var c=randnz(8);
		var d=new poly(1);d.setrand(8)
		if(d[1]<0)
		{
			d.xthru(-1);
			c=-c;
		}
		var f=gcd(c, d.gcd());
		if(f>1)
		{
			d.xthru(1/f);
			c/=f;
		}
		if(b[1]==d[1]&&b[0]==d[0]) d[0]=-d[0];
		
		var aString=(a>0?"$$":"$$-")+"\\frac{"+Math.abs(a)+"}{"+b.write()+"}"+(c>0?"+":"-")+"\\frac{"+Math.abs(c)+"}{"+d.write()+"}$$";
		
		var bot=polyexpand(b, d);
		b.xthru(c);
		d.xthru(a);
		b.addp(d);
		
		var qString="Express$$\\frac{"+b.write()+"}{"+bot.write()+"}$$in partial fractions.";
		
		var qa=[qString,aString];
		return qa;
	}
	function makePartial2()
	{
		var m=distrandnz(3, 3);
		var d=randnz(4),e=randnz(3),f=randnz(3);
		var l=ranking(m);
		var n=[d, e, f];
		var a=m[l[0]], b=m[l[1]], c=m[l[2]];
		d=n[l[0]];e=n[l[1]];f=n[l[2]];
		var u=new poly(1),v=new poly(1),w=new poly(1);
		u[1]=v[1]=w[1]=1;
		u[0]=a;v[0]=b;w[0]=c;
		var p=polyexpand(u, v),q=polyexpand(u, w), r=polyexpand(v, w);
		p.xthru(f);q.xthru(e);r.xthru(d);
		p.addp(q);p.addp(r);
		var qString="Express$$\\frac{"+p.write()+"}{"+express([a, b, c])+"}$$in partial fractions.";
		var aString=(d>0?"$$":"$$-")+"\\frac{"+Math.abs(d)+"}{"+u.write()+"}"+(e>0?"+":"-")+"\\frac{"+Math.abs(e)+"}{"+v.write()+"}"+(f>0?"+":"-")+"\\frac{"+Math.abs(f)+"}{"+w.write()+"}$$";
		var qa=[qString,aString];
		return qa;
	}
	var qa;
	if(rand()) qa=makePartial1();
	else qa=makePartial2();
	return qa;
}

// Binomial Theorem
function makeBinomial2()
{
	var p=new poly(1);
	p[0]=rand(1,5);
	p[1]=randnz(6-p[0]);
	var n=Math.round(3+Math.random()*(3-Math.max(0,Math.max(p[0]-3,p[1]-3))));
	
	var q=new poly(3);
	q[0]=Math.pow(p[0],n);
	q[1]=n*Math.pow(p[0],n-1)*p[1];
	q[2]=n*(n-1)*Math.pow(p[0],n-2)/2*Math.pow(p[1], 2);
	q[3]=n*(n-1)*(n-2)*Math.pow(p[0],n-3)/6*Math.pow(p[1], 3);

	qString="Evaluate$$("+p.rwrite()+")^"+n+"$$to the fourth term.";
	aString="$$"+q.rwrite()+"$$";

	var qa=[qString, aString];
	return qa;
}

// Polynomial Integration
function makePolyInt()
{
	var A=rand(-3,2);
	var B=rand(A+1,3);
	
	a=new poly(3);
	a.setrand(6);
	b=new fpoly(3);
	b.setpoly(a);
	c=new fpoly(4);
	b.integ(c);
	
	qString="Evaluate$$\\int_\{"+A+"\}^\{"+B+"\}"+a.write()+"\\,\\mathrm{d}x$$";
	var hi=c.compute(B);
	var lo=c.compute(A);
	lo.prod(-1);
	ans=new frac(hi.top, hi.bot);
	ans.add(lo.top, lo.bot);
	aString="$$"+ans.write()+"$$";
	
	var qa = [qString, aString];
	return qa;
}

// Simple Trig Integration
function makeTrigInt()
{
	var a=rand(0,7);
	var b=rand(1-Math.min(a,1),8);
	var A=a?randnz(4):0;
	var B=b?randnz(4):0;
	var U=pickrand(2,3,4,6);

	term1=a?ascoeff(A)+"\\sin\{"+ascoeff(a)+"x\}":"";
	term2=b?abscoeff(B)+"\\cos\{"+ascoeff(b)+"x\}":"";

	qString="Evaluate$$\\int_\{0\}^\{\\pi/"+U+"\}"+(a?b?term1+(B>0?" + ":" - ")+term2:term1:(B<0?"-":"")+term2)+"\\,\\mathrm{d}x$$";

	soln1=new Array(6);
	soln2=new Array(6);
	soln=new Array(6);

	if(a)
	{
		soln1=cospi(a,U);
		for(i=0;i<6;i+=2) soln1[i]*=-A;
		for(i=1;i<6;i+=2) soln1[i]*=a;
		if(soln1[0])
		{
			soln1[0]=soln1[1]*A+a*soln1[0];
			soln1[1]*=a;
		}
		else
		{
			soln1[0]=A;
			soln1[1]=a;
		}
	}
	else soln1=[0,1,0,1,0,1];

	if(b)
	{
		soln2=sinpi(b,U);
		for(i=0;i<6;i+=2) soln2[i]*=B;
		for(i=1;i<6;i+=2) soln2[i]*=b;
	}
	else soln2=[0,1,0,1,0,1];

	for(i=0;i<6;i+=2)
	{
		soln[i]=soln1[i]*soln2[i+1]+soln1[i+1]*soln2[i];
		soln[i+1]=soln1[i+1]*soln2[i+1];
		if(soln[i+1]<0)
		{
			soln[i]*=-1;
			soln[i+1]*=-1;
		}
		if(soln[i])
		{
			c=gcd(Math.abs(soln[i]),soln[i+1]);
			soln[i]/=c;
			soln[i+1]/=c;
		}
	} 
	aString="$$";
	if(soln[0]&&soln[1]==1) aString+=soln[0];
	else if(soln[0]>0) aString+="\\frac\{"+soln[0]+"\}\{"+soln[1]+"\}";
	else if(soln[0]<0) aString+="-\\frac\{"+(-soln[0])+"\}\{"+soln[1]+"\}";
	if(soln[2]&&soln[3]==1) aString+=(aString.length?soln[2]>0?"+":"":"")+soln[2]+"\\sqrt\{2\}";
	else if(soln[2]>0) aString+=(aString.length?"+":"")+"\\frac\{"+soln[2]+"\}\{"+soln[3]+"\}\\sqrt\{2\}";
	else if(soln[2]<0) aString+="-\\frac\{"+(-soln[2])+"\}\{"+soln[3]+"\}\\sqrt\{2\}";
	if(soln[4]&&soln[5]==1) aString+=(aString.length?soln[4]>0?"+":"":"")+soln[4]+"\\sqrt\{3\}";
	else if(soln[4]>0) aString+=(aString.length?"+":"")+"\\frac\{"+soln[4]+"\}\{"+soln[5]+"\}\\sqrt\{3\}";
	else if(soln[4]<0) aString+="-\\frac\{"+(-soln[4])+"\}\{"+soln[5]+"\}\\sqrt\{3\}";

	if(aString=="$$") 
		aString += "0$$";
	else
		aString += "$$";
	var qa=[qString,aString];
	return qa;
}

// Vectors
function makeVector()
{
	function ntol(n)
	{
		return String.fromCharCode(n+"A".charCodeAt(0));
	}
	A=new Array(4);
	for(var i=0;i<4;i++)
	{
		A[i]=new vector(3);
		A[i].setrand(10);
	}	
	B=new Array(0,1,2,3);
	for(var i=0;i<3;i++)
	{
		if(A[B[i]].mag()<A[B[i+1]].mag())
		{
			var c=B[i];
			B[i]=B[i+1];
			B[i+1]=c;
			i=-1;
		}
	}
	var v=distrand(3, 0, 3);
	
	//qString="Consider the four vectors$$\\begin\{array\}\{l\} \\mathbf\{A\}="+A[0].write()+", \\mathbf\{B\}="+A[1].write()+", \\mathbf\{C\}="+A[2].write()+", \\mathbf\{D\}="+A[3].write()+".\\\\ \\\\ \\mbox\{	(i) Order the vectors by magnitude.\}\\\\ \\\\ \\mbox\{	(ii) Use the scalar product to find the angles between (a) \}\\mathbf\{"+ntol(v[0])+"\} \\mbox\{ and \}\\mathbf\{"+ntol(v[1])+"\}, \\mbox\{(b) \}\\mathbf\{"+ntol(v[1])+"\} \\mbox\{ and \} \\mathbf\{"+ntol(v[2])+"\}.\\end\{array\}";
	qString = "Consider the four vectors";
	qString += "$$\\mathbf{A}=" + A[0].write() + ", \\mathbf{B}=" + A[1].write() + "$$";
	qString += "$$\\mathbf{C}=" + A[2].write() + ", \\mathbf{D}=" + A[3].write() + "$$";
	qString += "<ol style=\"list-style-type:lower-roman\"><li>Order the vectors by magnitude.</li>";
	qString += "<li>Use the scalar product<br>to find the angles between";
	qString += "<ol style=\"list-style-type:lower-alpha\"><li>\\(\\mathbf{" + ntol(v[0]) + "}\\) and \\(\\mathbf{" + ntol(v[1]) + "}\\),</li>";
	qString += "<li>\\(\\mathbf{" + ntol(v[1]) + "}\\) and \\(\\mathbf{" + ntol(v[2]) + "}\\)</li></ol></ol>";
	
	aString = "<ol style=\"list-style-type:lower-roman\"><li>";
	aString += "\\(|\\mathbf{" + ntol(B[0]) + "}|=\\sqrt{" + A[B[0]].mag();
	aString += "}, |\\mathbf{" + ntol(B[1]) + "}|=\\sqrt{" + A[B[1]].mag();
	aString += "},\\)<br>\\( |\\mathbf{" + ntol(B[2]) + "}|=\\sqrt{" + A[B[2]].mag();
	aString += "}, |\\mathbf{" + ntol(B[3]) + "}|=\\sqrt{" + A[B[3]].mag();
	aString += "}\\).</li>";

	top1=A[v[0]].dot(A[v[1]]);
	bot1=new sqroot(A[v[0]].mag()*A[v[1]].mag());
	var c=gcd(Math.abs(top1),bot1.a);
	top1/=c;
	bot1.a/=c;
	top2=A[v[1]].dot(A[v[2]]);
	bot2=new sqroot(A[v[1]].mag()*A[v[2]].mag());
	c=gcd(Math.abs(top2),bot2.a);
	top2/=c;
	bot2.a/=c;

	aString+="<li><ol style=\"list-style-type:lower-alpha\"><li>\\(";
	if(top1==0) aString+="\\pi/2";
	else if(top1==1&&bot1.n==1&&bot1.a==1) aString+="0";
	else if(top1==-1&&bot1.n==1&&bot1.a==1) aString+="\\pi";
	else
	{
		aString+="\\arccos\\left(";
		if(bot1.a==1&&bot1.n==1) aString+=top1;
		else aString+="\\frac{"+top1+"}{"+bot1.write()+"}";
		aString+="\\right)";
	}
	aString+="\\)</li><li>\\(";
	if(top2==0) aString+="\\pi/2";
	else if(top2==1&&bot2.n==1&&bot2.a==1) aString+="0";
	else if(top2==-1&&bot2.n==1&&bot2.a==1) aString+="\\pi";
	else
	{ 
		aString += "\\arccos\\left(";
		if(bot2.a==1&&bot2.n==1) aString+=top2;
		else aString += "\\frac\{"+top2+"\}\{"+bot2.write()+"\}";
		aString += "\\right)";
	}
	aString += "\\)</li></ol></li></ol>";
 
	var qa=[qString,aString];
	return qa;
}

// Lines in 3D
function makeLines()
{
//	if(!requireModule("Fractions"))
//	{
//		alert("Missing required module!<br>This problem is unlikely to work correctly.");
//	}
	var a1=randnz(3);
	var b1=randnz(3);
	var c1=randnz(3);
	var d1=rand(3);
	var e1=rand(3);
	var f1=rand(3);
	var a2,b2,c2,d2,e2,f2;
	var ch=rand(1,10); 
	if(ch<6)
	{
		a2=randnz(3);
		b2=randnz(3);
		c2=randnz(3);
		d2=rand(3);
		e2=rand(3);
		f2=rand(3);
	}
	else if(ch<10)
	{
		a2=randnz(2);
		b2=randnz(2);
		c2=randnz(2);
		if(a1*b1*c1%3==0&&a1*b1*c1%2==0)
		{
			if(rand())
			{
				if(a1%3==0) a1/=3;
				if(b1%3==0) b1/=3;
				if(c1%3==0) c1/=3;
			}
			else
			{
				if(a1%2==0) a1/=2;
				if(b1%2==0) b1/=2;
				if(c1%2==0) c1/=2;
			}
		}
		if(a2*d1%a1!=0)
		{
			a2*=a1; b2*=a1; c2*=a1;
		}
		if(b2*e1%b1!=0)
		{
			a2*=b1; b2*=b1; c2*=b1;
		}
		if(c2*f1%c1!=0)
		{
			a2*=c1; b2*=c1; c2*=c1;
		}
		d2=a2*d1/a1;
		e2=b2*e1/b1;
		f2=c2*f1/c1;
		var m1=Math.abs(Math.min(d2,Math.min(e2,f2)));
		var m2=Math.max(d2,Math.max(e2,f2));
		if(m1>4) { d2+=4; e2+=4; f2+=4; }
		if(m2>4) { d2-=2; e2-=2; f2-=2; }
		if((m1=gcd(a2,b2,c2,d2,e2,f2))>1)
		{
			a2/=m1;b2/=m1;c2/=m1;d2/=m1;e2/=m1;f2/=m1;
		}
	}
	else
	{
		var sn=randnz(2);
		a2=a1*sn;
		b2=b1*sn;
		c2=c1*sn;
		d2=rand(3);
		e2=rand(3);
		f2=rand(3);
	}
	p1=new poly(1);p1[0]=d1;p1[1]=a1;
	q1=new poly(1);q1[0]=e1;q1[1]=b1;
	r1=new poly(1);r1[0]=f1;r1[1]=c1;
	p2=new poly(1);p2[0]=d2;p2[1]=a2;
	q2=new poly(1);q2[0]=e2;q2[1]=b2;
	r2=new poly(1);r2[0]=f2;r2[1]=c2;
	var eqn1=p1.write('x')+"="+q1.write('y')+"="+r1.write('z');
	var eqn2=p2.write('x')+"="+q2.write('y')+"="+r2.write('z');

	qString="Consider the lines$$"+eqn1+"$$and$$"+eqn2+"$$Find the angle between them<br>and determine whether they<br>intersect.";

	if(a1*b2==b1*a2&&b1*c2==c1*b2)
	{
		if(a2*b2*d1-b2*a1*d2==a2*b2*e1-a2*b1*e2&&b2*c2*e1-c2*b1*e2==b2*c2*f1-b2*c1*f2) aString="\\mbox{The lines are identical.}";
		else aString="The lines are parallel and do not meet.";
	}

	else
	{
		cosbot=new sqroot((b1*b1*c1*c1+c1*c1*a1*a1+a1*a1*b1*b1)*(b2*b2*c2*c2+c2*c2*a2*a2+a2*a2*b2*b2));
		costh=new frac(b1*b2*c1*c2+c1*c2*a1*a2+a1*a2*b1*b2,cosbot.a);
		cosbot.a=costh.bot;
		aString="The angle between the lines is$$";
		if(costh.top==0)
			aString+="\\pi/2.$$";
		else {
			aString+="\\arccos\\left(";
			if(cosbot.n==1) aString+=costh.write();
			else aString+="\\frac{"+costh.top+"}{"+cosbot.write()+"}";
			aString+="\\right).$$"
		}
		mu=new frac();
		lam1=new frac();
		lam2=new frac();
		if(a1*b2-a2*b1)
		{
			mu.set(a2*b2*(e1-d1)-a2*b1*e2+a1*b2*d2,a1*b2-a2*b1);
			lam1.set(b1*mu.top-b1*e2*mu.bot+e1*b2*mu.bot,mu.bot*b2);
			lam2.set(c1*mu.top-c1*f2*mu.bot+f1*c2*mu.bot,mu.bot*c2);
		}
		else
		{
			mu.set(b2*c2*(f1-e1)-b2*c1*f2+b1*c2*e2,b1*c2-b2*c1);
			lam1.set(c1*mu.top-c1*f2*mu.bot+f1*c2*mu.bot,mu.bot*c2);
			lam2.set(a1*mu.top-a1*d2*mu.bot+d1*a2*mu.bot,mu.bot*a2);
		}
		if(lam1.equals(lam2))
		{
			xm=new frac(lam1.top-d1*lam1.bot,a1*lam1.bot);
			ym=new frac(lam1.top-e1*lam1.bot,b1*lam1.bot);
			zm=new frac(lam1.top-f1*lam1.bot,c1*lam1.bot);
			aString+="The lines meet at the point$$left("+xm.write()+","+ym.write()+","+zm.write()+"\\right).$$";
		}
		else aString+="The lines do not meet.";
	}
	var qa=[qString,aString];
	return qa;
}

function makeIneq()
{
	function makeIneq2()
	{
		var roots=distrandnz(2, 6);
		var B=-roots[0]-roots[1];
		var C=roots[0]*roots[1];
		var qString="By factorizing a suitable polynomial, or otherwise, find the values of \\(x\\) which satisfy$$";
		var p=new poly(2);
		switch(rand(1,3))
		{
			case 1:
				p[0]=0;p[1]=B;p[2]=1;
				qString+=p.write()+" < "+(-C);
			break;
			case 2:
				p[0]=C;p[1]=0;p[2]=1;
				qString+=p.write()+" < "+(B?ascoeff(-B)+"x":"0");
			break;
			case 3:
				p[0]=-C;p[1]=-B;p[2]=0;
				qString+="x^2"+" < "+p.write();
			break;
		}
		qString+="$$";
		var aString="$$"+Math.min(roots[0],roots[1])+" < x < "+Math.max(roots[0], roots[1])+"$$";
		var qa=[qString,aString];
		return qa;
	}

	function makeIneq3()
	{
		var a=randnz(5);
		var b=randnz(5);
		var c=rand(2);
		var qString="By factorizing a suitable polynomial, or otherwise, find the values of \\(y\\) which satisfy$$";
		var B=-(a+b+c);
		var C=a*b+b*c+c*a;
		var D=-a*b*c;
		var p=new poly(3);p.set(0,0,0,1);
		var q=new poly(2);q.set(0,0,0);
		switch(rand(1,3))
		{
			case 1:
				p[2]=B;q[1]=-C;q[0]=-D;
			break;
			case 2:
				p[1]=C;q[2]=-B;q[0]=-D;
			break;
			case 3:
				p[0]=D;q[2]=-B;q[1]=-C;
			break;
		}
		qString+=p.write('y')+" < "+q.write('y')+"$$";
		var m=[a,b,c];
		var r=ranking(m);
		var aString="$$y < "+m[r[0]];
		if(m[r[1]]!=m[r[2]]) aString+="$$and$$"+m[r[1]]+" < y < "+m[r[2]] + "$$";
		var qa=[qString,aString];
		return qa;
	}
	var qa=rand() ? makeIneq2() : makeIneq3();
	return qa;
}

function makeAP()
{
//	if(!Module("Fractions"))
//	{
//		alert("Missing required module!<br>This problem is unlikely to work correctly.");
//	}
	var m=rand(2,6);
	var n=rand(m+2,11);
	var k=rand(Math.max(n+3,10),40);
	a1=new frac();
	a2=new frac();
	var qString="An arithmetic progression has "+ordt(m)+" term \\(\\alpha\\) and "+ordt(n)+" term \\(\\beta\\). Find the ";
	if(rand()==0)
	{ 
		qString+="sum to \\("+k+"\\) terms.";	
		a1.set(k*(2*n-1-k),2*(n-m));
		a2.set(k*(1+k-2*m),2*(n-m));
	}
	else
	{
		qString+="value of the \\("+ordt(k)+"\\) term."
		a1.set(n-k,n-m);
		a2.set(k-m,n-m);
	}
	var aString="$$"+fcoeff(a1, "\\alpha")+(a2.top>0?" + ":" - ")+fbcoeff(a2, "\\beta")+"$$";
	var qa=[qString,aString];
	return qa;
}

function makeFactor()
{
	function makeFactor1()
	{
		var a=randnz(4), b=randnz(7), c=randnz(7);
		var u=new poly(1), v=new poly(1), w=new poly(1);
		u[1]=v[1]=w[1]=1;
		u[0]=a;v[0]=b;w[0]=c;
		var x=polyexpand(polyexpand(u, v), w);
		var qString="Divide $$"+x.write()+"$$ by $$("+u.write()+")$$ and hence factorise it completely.";
		var aString=$$+express([a, b, c])+$$;
		var qa=[qString,aString];
		return qa;
	}
	function makeFactor2()
	{
		var a=randnz(2), b=randnz(5), c=randnz(5);
		var u=new poly(1), v=new poly(1), w=new poly(1);
		u[1]=v[1]=w[1]=1;
		u[0]=a;v[0]=b;w[0]=c;
		var x=polyexpand(polyexpand(u, v), w);
		var qString="Use the factor theorem to factorise $$"+x.write()+".$$";
		var aString=express([a, b, c]);
		var qa=[qString,aString];
		return qa;
	}
	function makeFactor3()
	{
		var a=randnz(2), b=randnz(4), c=randnz(4), d=randnz(4);
		if(d==c) d=-d;
		var u=new poly(1), v=new poly(1), w=new poly(1), y=new poly(1);
		u[1]=v[1]=w[1]=y[1]=1;
		u[0]=a;v[0]=b;w[0]=c;y[0]=d;
		var x=polyexpand(polyexpand(u, v), w);
		var z=polyexpand(polyexpand(u, v), y);
		var qString="Simplify$$\\frac{"+x.write()+"}{"+z.write()+"}.$$";
		var aString="$$\\frac{"+w.write()+"}{"+y.write()+"}$$";
		var qa=[qString,aString];
		return qa;
	}

	var qa;
	if(rand()) qa=makeFactor1();
	else if(rand()) qa=makeFactor2();
	else qa=makeFactor3();
	return qa;
}

function makeQuadratic()
{
//	if(!requireModule("Fractions"))
//	{
//		alert("Missing required module!<br>This problem is unlikely to work correctly.");
//	}
	var qString="Find the real roots, if any, of$$";
	var aString;
	if(rand())
	{
		var p=new poly(2);
		p.setrand(5)
		p[2]=1;
		qString+=p.write();
		dcr=p[1]*p[1]-4*p[0];
		if(dcr<0)
		{
			aString="There are no real roots.";
		}
		else if(dcr==0)
		{
			r1=new frac(-p[1],2);
			aString="$$x="+r1.write()+"$$is a repeated root.";
		}
		else
		{
			disc=new sqroot(dcr);
			r1=new frac(-p[1],2);
			if(disc.n==1)
			{
				r1.add(disc.a,2);
				aString="$$x="+r1.write()+"\\mbox{ and }x=";
				r1.add(-disc.a);
				aString+=r1.write() + "$$";
			}
			else
			{
				r2=new frac(disc.a,2);
				aString="$$x="+(r1.top?r1.write():"")+"\\pm";
				if((r2.top!=1)||(r2.bot!=1)) aString+=r2.write();
				aString+="\\sqrt{"+disc.n+"}$$";
			}
		}
	}
	else
	{
		var roots=distrandnz(2, 5);
		var p=new poly(2);
		p[2]=1;p[1]=-roots[0]-roots[1];p[0]=roots[0]*roots[1];
		qString+=p.write();
		aString="$$x="+roots[0]+"\\mbox{ and }x="+roots[1]+"$$";
	}
	qString+="=0$$";
	var qa=[qString,aString];
	return qa;		
}

function makeComplete()
{
	var a=randnz(4);
	var b=randnz(5);
	var p=new poly(2);
	p[2]=1;p[1]=-2*a;p[0]=a*a+b;
	var qString,aString;
	if(rand())
	{
		qString="By completing the square, find (for real \\(x\\)) the minimum value of$$"+p.write()+".$$";
		aString="The minimum value is \\("+b+"\\) which occurs at \\(x="+a+"\\)";
	}
	else
	{
		var c=randnz(3);
		var d=randnz(c+2,c+4);
		qString="Find the minimum value of$$"+p.write()+"$$in the range$$"+c+"\\leq x\\leq"+d+".$$";
		if(c<=a&&a<=d) aString="The minimum value is \\("+b+"\\) which occurs at \\(x="+a+"\\)";
		else if(a<c) aString="The minimum value is \\("+(c*c-2*a*c+a*a+b)+"\\) which occurs at \\(x="+c+"\\)";
		else aString="The minimum value is \\("+(d*d-2*a*d+a*a+b)+"\\) which occurs at \\(x="+d+"\\)";
	}
	var qa=[qString,aString];
	return qa;
}

function makeBinExp()
{
//	if(!requireModule("Frac_Polynomials"))
//	{
//		alert("Missing required module!<br>This problem is unlikely to work correctly.");
//	}
	var a=rand(1,3);
	var b=randnz(2);
	var n=rand(2,5);
	var m=rand(1,n-1);
	pow=new frac(m,n);
	var p=new fpoly(1);
	p[0]=new frac(1,1);p[1]=new frac(b,a);
	var qString="Find the first four terms in the expansion of $$\\left("+p.rwrite()+"\\right)^{"+pow.write()+"}$$";
	var q=new fpoly(3);
	q[0]=new frac(1);
	q[1]=new frac(m*b,n*a);
	q[2]=new frac(m*(m-n)*b*b,2*n*n*a*a);
	q[3]=new frac(m*(m-n)*(m-2*n)*b*b*b,6*n*n*n*a*a*a);
	var aString="$$"+q.rwrite()+"$$";
	var qa=[qString,aString];
	return qa;
}

function makeLog()
{
//	if(!requireModule("Fractions"))
//	{
//		alert("Missing required module!<br>This problem is unlikely to work correctly.");
//	}
	function makeLog1()
	{
		var a=pickrand(2,3,5);
		var m=rand(1,4);
		var n=rand(1,4);if(n>=m) n++;
		var qString="If \\("+Math.pow(a,m)+"="+Math.pow(a,n)+"^{x}\\) find \\(x\\).";
		r=new frac(m,n);
		var aString="$$x="+r.write()+"$$";
		var qa=[qString,aString];
		return qa;
	}
	function makeLog2()
	{
		var a=rand(2,9);
		var b=rand(2,5);
		var c=b*b;
		var qString="Find \\(x\\) if \\("+c+"\\log_{x}"+a+"=\\log_{"+a+"}x\\).";
		var aString="$$x="+Math.pow(a,b)+"\\mbox{ or }x=\\frac{1}{"+Math.pow(a, b)+"}$$";
		var qa=[qString,aString];
		return qa;
	}
	function makeLog3()
	{
		var a=rand(2,7);
		var b=Math.floor(Math.pow(a,7*Math.random()));
		var qString="If \\("+a+"^{x}="+b+"\\), find \\(x\\) to three decimal places.";
		c=new Number(Math.log(b)/Math.log(a));
		var aString="$$x="+c.toFixed(3)+"$$";
		var qa=[qString,aString];
		return qa;
	}
	var qa;
	switch(rand(1,3))
	{
		case 1:	
			qa=makeLog1();
			break;
		case 2:
			qa=makeLog2();
			break;
		case 3:
			qa=makeLog3();
			break;
	}		
	return qa;				
}

function makeStationary()
{
//	if(!requireModule("Fractions"))
//	{
//		alert("Missing required module!<br>This problem is unlikely to work correctly.");
//	}
	function makeStationary2()
	{
		var p=new poly(2);
		p.set(randnz(4), randnz(8), randnz(4));
		d=new frac(-p[1],2*p[2]);
		var qString="Find the stationary point of $$y="+p.write()+",$$ and state whether it is a maximum or a minimum.";
		var aString="\\(x="+d.write()+"\\),";
		if(p[2]>0) aString+=" minimum.";
		else aString+=" maximum.";
		var qa=[qString,aString];
		return qa;
	}
	function makeStationary3()
	{
		var p=new poly(3);
		var d=randnz(4), c=randnz(3), b=randnz(3), a=randnz(5);
		if((Math.abs(c*(b+a))%2)==1) b++; // I hope it doesn't matter that this can make b==0.
		p.set(d, 3*c*a*b, -3*c*(a+b)/2, c);
		var qString="Find the stationary points of $$y="+p.write()+",$$ and state their nature.";
		var aString;
		if(a==b) aString="\\(x="+a+",\\) point of inflexion.";
		else if(c>0) aString="\\(x="+Math.min(a,b)+",\\) maximum, and \\(x="+Math.max(a,b)+",\\) minimum";
		else aString="\\(x="+Math.min(a,b)+",\\) minimum, and \\(x="+Math.max(a,b)+",\\) maximum";
		var qa=[qString,aString];
		return qa;
	}	
	var qa;
	switch(rand(2,3))
	{
		case 2:
			qa=makeStationary2();
			break;
		case 3:
			qa=makeStationary3();
			break;	 
	}
	return qa;			
}

function makeTriangle()
{
//	if(!requireModule("Fractions"))
//	{
//		alert("Missing required module!<br>This problem is unlikely to work correctly.");
//	}
	function makeTriangle1()
	{
		var a=rand(3,8);
		var b=rand(a+1,16);
		var m=distrand(3, 0, 2);
		var s=["AB", "BC", "CA"];
		var hyp=s[m[0]];
		var short=s[m[1]];
		var other=s[m[2]];
		var angle;
		switch(hyp) {
			case "AB":
				angle="C";
				break;
			case "BC":
				angle="A";
				break;
			case "CA":
				angle="B";
				break;
		}
		var qString="In triangle \\(ABC, "+short+"="+a+","+hyp+"="+b+",\\) and angle \\("+angle+"\\) is a right angle. Find \\("+other+"\\).";
		length=new sqroot(b*b-a*a);
		var aString="$$"+other+"="+length.write()+"$$";
		var qa=[qString,aString];
		return qa;
	}
	function makeTriangle2()
	{
		var a=rand(2,8);
		var b=rand(1,6);
		var c=rand(Math.max(a,b)-Math.min(a,b)+1,a+b-1);
		var qString="In triangle \\(ABC, AB="+c+",BC="+a+",\\) and \\(CA="+b+".\\) Find the angles of the triangle.";
		aa=new frac(b*b+c*c-a*a,2*b*c);
		bb=new frac(c*c+a*a-b*b,2*c*a);
		cc=new frac(a*a+b*b-c*c,2*a*b);
		var aString="$$\\cos A="+aa.write()+",\\cos B="+bb.write()+",\\cos C="+cc.write()+".$$";
		var qa=[qString,aString];
		return qa;
	}
	function makeTriangle3()
	{
		var a=rand(1,6);
		var cc=pickrand(3,4,6);
		var lb=a*Math.ceil(Math.sin(Math.PI/cc))
		var c=rand(lb, Math.max(5, lb+1));
		var qString="In triangle \\(ABC, AB="+c+", BC="+a+"\\) and angle \\(C=\\frac{\\pi}{"+cc+"}. \\) Find angle \\(A\\).";
		d=new frac(a,2*c);
		var aString="$$A=\\arcsin\\left("+d.write();
		if(cc==3) aString+="\\sqrt{3}";
		else if(cc==4) aString+="\\sqrt{2}";
		aString+="\\right)$$";
		var qa=[qString,aString];
		return qa;
	}	
	var qa;
	switch(rand(1,3))
	{
		case 1:
			qa=makeTriangle1();
			break;
		case 2:
			qa=makeTriangle2();
			break;
		case 3:
			qa=makeTriangle3();
			break;	 
	}					 
	return qa;
} 

function makeCircle()
{
//	if(!requireModule("Fractions"))
//	{
//		alert("Missing required module!<br>This problem is unlikely to work correctly.");
//	}
	var r=rand(2,8);
	var bot=rand(2,9);
	var top=rand(1,2*bot-1);
	prop=new frac(top,bot);
	var qString="Find, for a sector of angle \\(";
	qString += ((prop.bot===1) ? 
		(ascoeff(prop.top)+"\\pi") :
		("\\frac{" + ascoeff(prop.top) + "\\pi}{" + prop.bot + "}"));
	qString += "\\) of a disc of radius \\(" + r + ":\\)<br>i. the length of the perimeter; and<br>ii. the area.";
	length=new frac(prop.top*r,prop.bot);
	area=new frac(prop.top*r*r,2*prop.bot);
	var aString="i. \\("+(r*2)+"+"+length.write()+"\\pi\\)<br>ii. \\("+area.write()+"\\pi\\)";
	var qa=[qString,aString];
	return qa;
}	

function makeSolvingTrig()
{
//	if(!requireModule("Fractions"))
//	{
//		alert("Missing required module!<br>This problem is unlikely to work correctly.");
//	}
	var A=pickrand(1,3,4,5);
	var alpha=pickrand(3,4,6);
	c=new frac(A,2);
	
	var qString="Write $$"+c.write();
	if(alpha==6) qString+="\\sqrt{3}";
	else if(alpha==4) qString+="\\sqrt{2}";
	qString+="\\sin{\\theta}+"+c.write();
	if(alpha==4) qString+="\\sqrt{2}";
	else if(alpha==3) qString+="\\sqrt{3}";
	qString+="\\cos{\\theta}$$ in the form \\(A\\sin(\\theta+\\alpha),\\) where \\(A\\) and \\(\\alpha\\) are to be determined.";
	var aString="$$"+(A==1?"":A)+"\\sin\\left(\\theta+\\frac{\\pi}{"+alpha+"}\\right)$$";
	var qa=[qString,aString];
	return qa;
}

function makeVectorEq()
{
	a=new vector(3);
	a.setrand(6);
	b=new vector(3);
	b.setrand(6);
	l=distrand(3, 5);
	v=new Array(3);
	for(var i=0;i<3;i++)
	{
		v[i]=new vector(3);
		v[i].set(a[0]+l[i]*b[0],a[1]+l[i]*b[1],a[2]+l[i]*b[2]);
	}
	var qString="Show that the points with position vectors$$"+v[0].write()+","+v[1].write()+","+v[2].write()+"$$";
	qString+="lie on a straight line, and give the equation of the line in the form \\(\\mathbf{r}=\\mathbf{a}+\\lambda\\mathbf{b}\\).";
	var aString='$$'+a.write()+"+\\lambda"+b.write()+'$$';
	var qa=[qString,aString];
	return qa;
}

function makeImplicit()
{
//	if(!requireModule("Fractions"))
//	{
//		alert("Missing required module!<br>This problem is unlikely to work correctly.");
//	}
	if(rand())
	{
		var a1=rand(1,3);
		var b1=randnz(4);
		var c1=rand(1,3);
		var d1=randnz(4);
		if(d1*a1-b1*c1==0) (d1>0?d1++:d1--);
		var a2=randnz(3);
		var b2=randnz(4);
		var c2=rand(1,3);
		var d2=randnz(4);
		if(d2*a2-b2*c2==0) (d2>0?d2++:d2--);
		var t=randnz(3);
		while((c1*t+d1)==0||(c2*t+d2)==0) (t>0?t++:t--);
		var qString="If $$y=\\frac{"+p_linear(a1, b1).write('t')+"}{"+p_linear(c1, d1).write('t')+"}$$ and $$x=\\frac{"+p_linear(a2, b2).write('t')+"}{"+p_linear(c2, d2).write('t')+"},$$find \\(\\frac{dy}{dx}\\) when \\(t="+t+"\\)";
		a=new frac((a1*d1-b1*c1)*(c2*t+d2)*(c2*t+d2), (a2*d2-b2*c2)*(c1*t+d1)*(c1*t+d1));
		var aString="$$"+a.write()+"$$";
		var qa=[qString,aString];
		return qa;
	}
	else
	{
		fns=new Array("\\ln(z)", "e^{z}", "\\csc(z)", "\\sec(z)", "\\sin(z)", "\\tan(z)", "\\cos(z)");
		difs=new Array("\\frac{1}{z}", "e^{z}", "-\\csc(z)\\cot(z)", "\\sec(z)\\tan(z)", "\\cos(z)", "\\sec^2(z)", "-\\sin(z)");
		var which=distrand(2, 0, 6);
		var p=new poly(rand(1, 3));
		p.setrand(3);
		var q=new poly(1);p.diff(q);
		var qString="If $$y+"+fns[which[0]].replace(/z/g, 'y')+"="+fns[which[1]].replace(/z/g, 'x')+(p[p.rank]>0?"+":"")+p.write('x')+",$$ find \\(\\frac{dy}{dx}\\) in terms of \\(y\\) and \\(x\\).";
		var aString="$$\\frac{dy}{dx} = \\frac{"+difs[which[1]].replace(/z/g, 'x')+(q[q.rank]>0?"+":"")+q.write('x')+"}{"+difs[which[0]].replace(/z/g, 'y')+"+1}$$";
		var qa=[qString,aString];
		return qa;
	}
}

function makeChainRule()
{
	fns=new Array("\\ln(z)", "\\csc(z)", "\\sec(z)", "\\sin(z)", "\\tan(z)", "\\cos(z)");
	difs=new Array("\\frac{y}{z}", "-y\\csc(z)\\cot(z)", "y\\sec(z)\\tan(z)", "y\\cos(z)", "y\\sec^2(z)", "-y\\sin(z)");
	even=new Array(-1, 1, -1, 1, 1, -1);
	var which=rand(0, 5);
	a=new poly(rand(1, 3));
	a.setrand(8);
	b=new poly(0);
	a.diff(b);
	var qString="Differentiate \\("+fns[which].replace(/z/g, a.write())+"\\)";
	if(difs[which].charAt(0)=='-')
	{
		difs[which]=difs[which].slice(1);
		b.xthru(-1);
	}
	if(a[a.rank]<0)
	{
		a.xthru(-1);
		b.xthru(even[which]);
	}
	var aString;
	if(which==0)
	{
		var c=gcd(a.gcd(), b.gcd());
		a.xthru(1.0/c);
		b.xthru(1.0/c);
	}
	if((b.terms()>1)&&which)
		aString='('+b.write()+')';
	else if(b.rank==0&&which)
		aString=ascoeff(b[0]);
	else
		aString=b.write();
	aString="$$"+difs[which].replace(/z/g, a.write()).replace(/y/g, aString)+"$$";
	var qa=[qString,aString];
	return qa;
}

function makeProductRule()
{
	fns=new Array("\\ln(z)", "\\csc(z)", "\\sec(z)", "\\sin(z)", "\\tan(z)", "\\cos(z)");
	difs=new Array("\\frac{y}{z}", "-y\\csc(z)\\cot(z)", "y\\sec(z)\\tan(z)", "y\\cos(z)", "y\\sec^2(z)", "-y\\sin(z)");
	even=new Array(-1, 1, -1, 1, 1, -1);
	var which=rand(0, 5);
	a=new poly(rand(1, 3));
	a.setrand(8);
	b=new poly(0);
	a.diff(b);
	var qString="Differentiate $$";
	if(a.terms()>1)
		qString+='('+a.write()+')'+fns[which].replace(/z/g, 'x');
	else
		qString+=a.write()+fns[which].replace(/z/g, 'x');
	qString += "$$";
	var aString;
	if(b.terms()>1)
		aString='$$('+b.write()+')';
	else if(b[0]==1)
		aString='$$';
	else if(b[0]==-1)
		aString='$$-';
	else
		aString='$$'+b.write();
	if(difs[which].charAt(0)=='-')
	{
		difs[which]=difs[which].slice(1);
		a.xthru(-1);
	}
	if(a[a.rank]>0)
		aString+=fns[which].replace(/z/g, 'x')+' + ';
	else
	{
		aString+=fns[which].replace(/z/g, 'x')+' - ';
		a.xthru(-1);
	}
	if(which==0&&a[0]==0) // deal with eg. D(axlnx) = alnx + ax/x = alnx + a
	{
		for(var i=0;i<a.rank;i++)
			a[i]=a[i+1];
		a.rank--;
		aString+=a.write();
	}
	else if((a.terms()>1)&&which)
		aString+=difs[which].replace(/y/g, '('+a.write()+')').replace(/z/g, 'x');
	else if((a[0]==1)&&which)
		aString+=difs[which].replace(/y/g, '');
	else
		aString+=difs[which].replace(/y/g, a.write()).replace(/z/g, 'x');
	aString += '$$';
	var qa=[qString,aString];
	return qa;
}

function makeQuotientRule()
{
	fns=new Array("\\sin(z)", "\\tan(z)", "\\cos(z)");
	difs=new Array("\\csc(z)\\cot(z)", "\\csc^2(z)", "\\sec(z)\\tan(z)");
	even=new Array(1, 1, -1);
	var which=rand(0, 2);
	var a=randnz(8);
	b=new poly(2);
	b.setrand(8);
	// D(a/f.b = (f.b*Da)+(a*D{f.b})/(f*f).b = a*b'*f'.b/(f*f).b
	var qString="Differentiate $$\\frac{"+a+"}{"+fns[which].replace(/z/g, b.write())+"}$$";
	c=new poly(1);
	b.diff(c);
	c.xthru(a);
	if(b[b.rank]<0)
	{
		b.xthru(-1);
		c.xthru(even[which]);
	}
	var lead=c.write();
	if(c.terms()>1)
		lead='('+lead+')';
	else if(c.rank==0)
	{
		if(c[0]==1)
			lead="";
		else if(c[0]==-1)
			lead="-";
	}
	var bot=difs[which].replace(/z/g, b.write());
	var aString='$$'+lead+bot+'$$';
	var qa=[qString,aString];
	return qa;
}

function makeGP()
{
//	if(!requireModule("Fractions"))
//	{
//		alert("Missing required module!<br>This problem is unlikely to work correctly.");
//	}
	if(rand())
	{
		var a=randnz(8);
		var b=rand(2, 9);
		if(rand()) b=-b;
		var c=1;
		if(rand())
		{
			c=rand(2, 5);
			if(c==b) c++;
			var d=gcd(b, c);
			b/=d;
			c/=d;
		}
		var n=rand(5, 10);
		var qString = "Evaluate $$\\sum_{r=0}^{"+n+"} "+(a==1?"":a==-1?c==1&&b>0?"-\\left(":"-":a+"\\times")+(c==1?b<0?"\\left("+b+"\\right)":b:"\\left(\\frac{"+b+"}{"+c+"}\\right)")+"^{r}"+(a==-1&&c==1&&b>0?"\\right)":"")+'$$'; // don't you just love gratuitous use of the ternary operator?
		// Sum is a(1-r^n+1)/(1-r)
		var top=new frac(-Math.pow(b, n+1), Math.pow(c, n+1));
		top.add(1);
		top.prod(a);
		var bot=new frac(-b, c);
		bot.add(1);
		var ans=new frac(top.top*bot.bot, top.bot*bot.top);
		ans.reduce();
		var aString = '$$'+ans.write()+'$$';
	}
	else
	{
		var a=randnz(8);
		var b=rand(1, 6);
		var c=rand(b+1, 12);
		if(rand()) b=-b;
		var r=new frac(b, c);
		r.reduce();
		var qString = "Evaluate$$\\sum_{r=0}^{\\infty} "+(a==1?"":a==-1?"-":a+"\\times")+"\\left("+r.write()+"\\right)^{r}$$";
		// Sum is a/(1-r)
		r.prod(-1);
		r.add(1);
		var ans=new frac(a*r.bot, r.top);
		var aString = '$$'+ans.write()+'$$';
	}
	var qa=[qString,aString];
	return qa;
}

function makeModulus()
{
	var parms=0;
	var fn=0;
	var data="";
	if(rand())
	{
		var a=randnz(4);
		var aa=Math.abs(a);
		var l=rand(-aa-6, -aa-2);
		var r=rand(aa+2, aa+6);
		var data=[];
		qString="Sketch the graph of \\(|"+a+"-|x||\\) for \\("+l+"\\leq{x}\\leq"+r+"\\).";
		aString='%GRAPH%';
		fn=function drawIt(parms)
		{
			var d1 = [];
			var n=0;
			for(var i=parms[1];i<=parms[2]; i+=0.5)
			{
				n++;
				d1.push([i, Math.abs(parms[0]-Math.abs(i))]);
				if(n>50)
					i=parms[2]; // prevent infiniloops
			}
			//$.plot($("#graph"), [d1]);
			return [d1];
		}
		parms=[a, l, r];
		data = JSON.stringify(fn(parms));
	}
	else
	{
		var a=distrandnz(2, 4);
		var s=[rand(), rand()];
		var xa=Math.max(Math.abs(a[0]), Math.abs(a[1]));
		var l=rand(-xa-6, -xa-2);
		var r=rand(xa+2, xa+6);
		qString="Sketch the graph of \\(("+a[0]+(s[0]?'+':'-')+"|x|)("+a[1]+(s[1]?'+':'-')+"|x|)\\) for \\("+l+"\\leq{x}\\leq"+r+"\\).";
		aString='%GRAPH%';
		fn=function drawIt(parms)
		{
			var a=parms[0];
			var s=parms[1];
			var l=parms[2];
			var r=parms[3];
			var d1 = [];
			var n=0;
			for(var i=l;i<=r; i+=0.25)
			{
				n++;
				d1.push([i, (a[0]+(s[0]?Math.abs(i):-Math.abs(i)))*(a[1]+(s[1]?Math.abs(i):-Math.abs(i)))]);
				if(n>100)
					i=r; // prevent infiniloops
			}
			//$.plot($("#graph"), [d1]);
			return [d1];
		}
		parms=[a,s,l,r];
		data = JSON.stringify(fn(parms));
	}
	var qa=[qString,aString,"Modulus function",data];
	return qa;
}

function makeTransformation()
{
	fnn=new Array("\\ln(z)", "\\csc(z)", "\\sec(z)", "\\sin(z)", "\\tan(z)", "\\cos(z)", "{z}^{2}");
	fnf=new Array(Math.log, function(x) { return 1/Math.sin(x);}, function(x) {return 1/Math.cos(x);}, Math.sin, Math.tan, Math.cos, function(x) {return Math.pow(x, 2);});
	var which=rand(0, 6);
	var parms=0;
	var fn=0;
	var data = "";
	var p=new poly(1);p.setrand(2);
	var q=new poly(1);q.setrand(3);
	q[1]=Math.abs(q[1]);
	if(rand()) p[1]=1;
	else if(rand()) q[1]=1;
	else if(rand()) p[0]=0;
	else q[0]=0;
	var l=which?rand(-5, 2):Math.max(Math.ceil((1-q[0])/q[1]), 0);
	var r=l+rand(4, 8);
	qString="Let \\(f(x)="+fnn[which].replace(/z/g, 'x')+"\\). Sketch the graphs of \\(y=f(x)\\) and \\(y="+p.write("f("+q.write()+")")+"\\) for \\("+l+((which==0&&l==0)?" < ":"\\leq ")+"x \\leq "+r+"\\).";
	console.log(qString);
	aString='%GRAPH%';
	fn=function drawIt(parms)
	{
		var p=parms[0];
		var q=parms[1];
		var f=parms[2];
		var l=parms[3];
		var r=parms[4];
		var d1 = [];
		var d2 = [];
		var n=0;
		for(var i=l;i<=r; i+=0.01)
		{
			n++;
			var y1=f(i);
			if(Math.abs(y1)>12)
				y1=null;
			d1.push([i, y1]);
			var y2=p.compute(f(q.compute(i)));
			if(Math.abs(y2)>12)
				y2=null;
			d2.push([i, y2]);
			if(n>2500)
				i=r; // prevent infiniloops
		}
		//$.plot($("#graph"), [d1, d2]);
		return [d1, d2];
	}
	parms=[p,q,fnf[which],l,r];
	data = JSON.stringify(fn(parms));
	var qa=[qString,aString,"Transformations of functions",data];
	return qa;
}

function makeComposition()
{
	var p=new poly(rand(1, 2));p.setrand(2);
	if(p.rank==1&&p[0]==0&&p[1]==1) p[0]=randnz(2);
	var fnf=new Array(Math.sin, Math.tan, Math.cos, 0);
	var fnn=new Array("\\sin(z)", "\\tan(z)", "\\cos(z)", p.write('z'));
	var which=distrand(2, 0, 3);
	var parms=0;
	var fn=0;
	var data="";
	var l=rand(-4, 0);
	var r=rand(Math.max(l+5, 2), 8);
	qString="Let \\(f(x)="+fnn[which[0]].replace(/z/g, 'x')+", g(x)="+fnn[which[1]].replace(/z/g, 'x')+".\\) Sketch the graph of \\(y=f(g(x))\\) (where it exists) for \\("+l+"\\leq{x}\\leq"+r+"\\) and \\(-12\\leq{y}\\leq12.\\)";
	aString='%GRAPH%';
	fn=function drawIt(parms)
	{
		var f=parms[0];
		var g=parms[1];
		var p=parms[2];
		var l=parms[3];
		var r=parms[4];
		var d1 = [];
		var n=0;
		for(var i=l;i<=r; i+=0.01)
		{
			n++;
			var y2=g?g(i):p.compute(i);
			var y3=y2?f?f(y2):p.compute(y2):null;
			if(Math.abs(y3)>12)
				y3=null;
			d1.push([i, y3]);
			if(n>2500)
				i=r; // prevent infiniloops
		}
		//$.plot($("#graph"), [d1]);
		return [d1];
	}
	parms=[fnf[which[0]], fnf[which[1]], p, l, r];
	data = JSON.stringify(fn(parms));
	var qa=[qString,aString,"Composition of functions",data];
	return qa;
}

function makeParametric()
{
	var p=new poly(rand(1, 2));p.setrand(2);
	if(p.rank==1&&p[0]==0&&p[1]==1) p[0]=randnz(2);
	var fnf=new Array(Math.log, function(x) { return 1/Math.sin(x);}, function(x) {return 1/Math.cos(x);}, Math.sin, Math.tan, Math.cos, 0);
	var fnn=new Array("\\ln(z)", "\\csc(z)", "\\sec(z)", "\\sin(z)", "\\tan(z)", "\\cos(z)", p.write('z'));
	var which=distrand(2, 0, 6);
	var parms=0;
	var fn=0;
	var data="";
	qString="Sketch the curve in the \\(xy\\) plane given by \\(x="+fnn[which[0]].replace(/z/g, 't')+", y="+fnn[which[1]].replace(/z/g, 't')+". t\\) is a real parameter which ranges from \\("+(which[0]&&which[1]?"-10":"0")+" \\mbox{ to } 10.\\)";
	aString='%GRAPH%';
	fn=function drawIt(parms)
	{
		var f=parms[0];
		var g=parms[1];
		var p=parms[2];
		var l=parms[3];
		var d1 = [];
		for(var i=l;i<=10; i+=0.01)
		{
			var x=f?f(i):p.compute(i);
			if(Math.abs(x)>12)
				x=null;
			var y=g?g(i):p.compute(i);
			if(Math.abs(y)>12)
				y=null;
			if(x&&y)
				d1.push([x, y]);
			else
				d1.push([null, null]);
		}
		//$.plot($("#graph"), [d1]);
		return [d1];
	}
	parms=[fnf[which[0]], fnf[which[1]], p, (which[0]&&which[1]?-10:0)];
	data = JSON.stringify(fn(parms));
	var qa=[qString,aString,"Parametric functions",data];
	return qa;
}

function makeImplicitFunction()
{
	function mIF1()
	{
		var a=distrand(2, 2, 5);
		var n=randnz(3);
		var f=new frac(a[0], a[1]);
		var data="";
		var qString="Sketch the curve in the \\(xy\\) plane given by \\(y="+ascoeff(n)+"x^{"+f.write()+"}\\)";
		var aString='%GRAPH%';
		fn=function drawIt(parms)
		{
			var f=parms[0];
			var n=parms[1];
			var d1 = [];
			for(var i=-10;i<=10; i+=0.01)
			{
				var x=Math.pow(i, f.bot);
				if(Math.abs(x)>12)
					x=null;
				var y=n*Math.pow(i, f.top);
				if(Math.abs(y)>12)
					y=null;
				if(x&&y)
					d1.push([x, y]);
				else
					d1.push([null, null]);
			}
			//$.plot($("#graph"), [d1]);
			return [d1];
		}
		parms=[f, n];
		data = JSON.stringify(fn(parms));
		var qa=[qString,aString,"Implicit functions",data];
		return qa;
	}
	function mIF2()
	{
		var a=distrandnz(2, 5);
		var n=randnz(6);
		var f=new frac(a[0], a[1]);
		var data="";
		var qString="Sketch the curve in the \\(xy\\) plane given by \\("+ascoeff(a[0])+"y"+(a[1]>0?"+":"")+ascoeff(a[1])+"x"+(n>0?"+":"")+n+"=0\\)";
		var aString='%GRAPH%';
		fn=function drawIt(parms)
		{
			var f=parms[0];
			var n=parms[1];
			var d1 = [];
			for(var i=-10;i<=10; i+=0.01)
			{
				var y=-i*a[1]/a[0]-n/a[0];
				d1.push([i, y]);
			}
			//$.plot($("#graph"), [d1]);
			return [d1];
		}
		parms=[f, n];
		data = JSON.stringify(fn(parms));
		var qa=[qString,aString,"Implicit functions",data];
		return qa;
	}
	function mIF3()
	{
		var data="";
		var a=distrandnz(2, 2, 5);
		var qString="Sketch the curve in the \\(xy\\) plane given by \\(\\frac{x^2}{"+(a[0]*a[0])+"} + \\frac{y^2}{"+(a[1]*a[1])+"}=1\\)";
		var aString='%GRAPH%';
		fn=function drawIt(parms)
		{
			var d1 = [];
			for(var i=-1;i<=1; i+=0.005)
			{
				var x=parms[0]*Math.cos(i*Math.PI);
				var y=parms[1]*Math.sin(i*Math.PI);
				d1.push([x, y]);
			}
			//$.plot($("#graph"), [d1]);
			return [d1];
		}
		parms=a;
		data = JSON.stringify(fn(parms));
		var qa=[qString,aString,"Implicit functions",data];
		return qa;
	}
	return(pickrand(mIF1, mIF2, mIF3)());
}

function makeIntegration()
{
	switch(rand(0, 1))
	{
		case 0:
			fns=new Array("\\ln(z)", "\\csc(z)", "\\sec(z)", "\\sin(z)", "\\tan(z)", "\\cos(z)");
			difs=new Array("\\frac{y}{z}", "-y\\csc(z)\\cot(z)", "y\\sec(z)\\tan(z)", "y\\cos(z)", "y\\sec^2(z)", "-y\\sin(z)");
			even=new Array(-1, 1, -1, 1, 1, -1);
			var which=rand(0, 5);
			a=new poly(rand(1, 3));
			a.setrand(8);
			a[a.rank]=Math.abs(a[a.rank]);
			if(which==0) a.xthru(1.0/a.gcd());
			var u=randnz(4);
			b=new poly(0);
			a.diff(b);
			var aString='$$'+p_linear(u, 0).write(fns[which].replace(/z/g, a.write()))+"+c$$";
			if(difs[which].charAt(0)=='-')
			{
				difs[which]=difs[which].slice(1);
				b.xthru(-1);
			}
			var qString;
			b.xthru(u);
			if((b.terms()>1)&&which)
				qString='('+b.write()+')';
			else if(b.rank==0&&which)
				qString=ascoeff(b[0]);
			else
				qString=b.write();
			qString="Find $$\\int"+difs[which].replace(/z/g, a.write()).replace(/y/g, qString)+"\\,\\mathrm{d}x$$";
			var qa=[qString,aString];
			return qa;
		break;
		case 1:
			fns=new Array("\\ln(z)", "\\csc(z)", "\\sec(z)", "\\sin(z)", "\\tan(z)", "\\cos(z)");
			difs=new Array("\\frac{y}{z}", "-y\\csc(z)\\cot(z)", "y\\sec(z)\\tan(z)", "y\\cos(z)", "y\\sec^2(z)", "-y\\sin(z)");
			even=new Array(-1, 1, -1, 1, 1, -1);
			var which=rand(0, 5);
			a=new poly(rand(1, 3));
			a.setrand(8);
			b=new poly(0);
			a.diff(b);
			var aString="$$"
			if(a.terms()>1)
				aString+='('+a.write()+')'+fns[which].replace(/z/g, 'x');
			else
				aString+=a.write()+fns[which].replace(/z/g, 'x');
			aString+="+c$$";
			var qString="Find $$\\int";
			if(b.terms()>1)
				qString+='('+b.write()+')';
			else if(b[0]==1)
				qString+='';
			else if(b[0]==-1)
				qString+='-';
			else
				qString+=b.write();
			if(difs[which].charAt(0)=='-')
			{
				difs[which]=difs[which].slice(1);
				a.xthru(-1);
			}
			if(a[a.rank]>0)
				qString+=fns[which].replace(/z/g, 'x')+' + ';
			else
			{
				qString+=fns[which].replace(/z/g, 'x')+' - ';
				a.xthru(-1);
			}
			if(which==0&&a[0]==0) // deal with eg. D(axlnx) = alnx + ax/x = alnx + a
			{
				for(var i=0;i<a.rank;i++)
					a[i]=a[i+1];
				a.rank--;
				qString+=a.write();
			}
			else if((a.terms()>1)&&which)
				qString+=difs[which].replace(/y/g, '('+a.write()+')').replace(/z/g, 'x');
			else if((a[0]==1)&&which)
				qString+=difs[which].replace(/y/g, '');
			else
				qString+=difs[which].replace(/y/g, a.write()).replace(/z/g, 'x');
			qString+="\\,\\mathrm{d}x$$";
			var qa=[qString,aString];
			return qa;
		break;
	}
}

function makeDE()
{
	if(rand()) /* The first order codes was buggy. No time to fix, so removed*/

	/*{
		var n=rand(1,3);
		fns=new Array("\\csc(z)", "\\sec(z)", "\\sin(z)", "\\tan(z)", "\\cos(z)", n==1?"{z}":"{z}^"+n);
		recint=new Array("-\\cos(z)", "\\sin(z)", "-\\ln{\|\\csc(z)+\\cot(z)\|}", "\\ln\|\\sin(z)\|", "\\ln\|\\sec(z)+\\tan(z)\|", "{z}^{"+(-1-n)+"}");
		riinv=new Array("\\arccos\\left(-z\\right)", "\\arcsin\\left(z\\right)", 0, 0, 0, "{\\left(z\\right)}^{-\\frac{1}{"+(1+n)+"}}");
		eriinv=new Array(0, 0, 0, "\\arcsin\\left(z\\right)", 0, 0);
		var which=distrand(2, 0, 5);
		qString="\\begin{array}{l}\\mbox{Find the general solution of the following first-order ODE:}\\\\ "+fns[which[0]].replace(/z/g, 'x')+"\\frac{\\,dy}{\\,dx}+"+fns[which[1]].replace(/z/g, 'y')+"=0\\end{array}";
		// f(x)y' + g(y) = 0 => -1/g(y) dy = 1/f(x) dx
		if(recint[which[1]].charAt(0)=='-')
		{
			recint[which[1]]=recint[which[1]].slice(1);
		}
		else
		{
			recint[which[1]]='-'+recint[which[1]];
		}
		if((recint[which[0]].search(/ln/)==-1) || (recint[which[1]].search(/ln/)==-1))
		{
			if(riinv[which[1]]==0)
				aString=recint[which[1]].replace(/z/g, 'y')+"=-"+recint[which[0]].replace(/z/g, 'x')+"+c";
			else
				aString="y="+riinv[which[1]].replace(/z/g, '-'+recint[which[0]].replace(/z/g, 'x')+"+c");
		}
		else
		{
			if(eriinv[which[1]]==0)
				aString=recint[which[1]].replace(/z/g, 'y').replace(/-\\ln{/, "\\frac{1}{").replace(/\\ln/, "")+"=-"+recint[which[0]].replace(/z/g, 'x').replace(/-\\ln{/, "\\frac{A}{").replace(/\\ln/, "A");
			else
				aString="y="+eriinv[which[1]].replace(/z/g, '-'+recint[which[0]].replace(/z/g, 'x').replace(/-\\ln{/, "\\frac{A}{").replace(/\\ln/, "A"));
		}
		aString=aString.replace(/--/g, ""); // -(-x+c) = (x-c) = (x+k) and call k c
		var qa=[qString,aString];
		return qa;
	}
	else if(rand(0, 4)>0)*/
	{
		var roots=distrand(2, 4);
		var p=p_quadratic(1, -roots[0]-roots[1], roots[0]*roots[1]);
		qString="Find the general solution of the following second-order ODE:$$"+p.write('D').replace("D^2", "\\frac{{\\,d^2}y}{{\\,dx}^2}").replace("D", "\\frac{\\,dy}{\\,dx}")+(p[0]==0?"":"y")+"=0"+"$$";
		aString="$$y="+(roots[0]==0?"A":"Ae^{"+ascoeff(roots[0])+"x}")+"+"+(roots[1]==0?"B":"Be^{"+ascoeff(roots[1])+"x}") + '$$';
		var qa=[qString,aString];
		return qa;
	}
	else
	{
		var b=randnz(6);
		qString="Find the general solution of the following first-order ODE:$$x\\frac{\\,dy}{\\,dx}-y="+(-b)+"$$";
		aString="$$y=Ax"+(b>0?'+':'')+b+'$$';
		var qa=[qString,aString];
		return qa;
	}
}

function makePowers()
{
	var res=new frac();
	var q="";
	for(var i=0;i<5;i++)
	{
		if(i==1||i>2) q+="\\times ";
		switch(rand(1, 4))
		{
			case 1:
				var a=randnz(4);
				var b=randnz(5);
				var p=new frac(a, b);
				q+=(p.top==p.bot?"x":"x^{"+p.write()+"}");
				if(i>1) a=-a;
				res.add(a, b);
			break;
			case 2:
				var a=randnz(4);
				var b=randnz(2, 5);
				if(gcd(a, b)!=1) (a>0?a++:a--);
				q+="\\root "+b+" \\of"+(a==1?"{x}":"{x^{"+a+"}}");
				if(i>1) a=-a;
				res.add(a, b);
			break;
			case 3:
				var u=distrand(2, 1, 3);
				var a=u[0];
				var b=u[1];
				var c=randnz(2, 6);
				var p=new frac(a, b);
				q+="\\left(x^{"+p.write()+"}\\right)^"+c;
				if(i>1) a=-a;
				res.add(a*c, b);
			break;
			case 4:
				q+="x";
				res.add((i>1?-1:1), 1);
			break;
		}
		if(i==1) q+="}{"
	}
	qString="Simplify $$\\frac{"+q+"}$$";
	aString="$$"+(res.top==res.bot?"x":"x^{"+res.write()+"}")+'$$';
	var qa=[qString,aString];
	return qa;
}

/****************************\
|*	START OF FP MATERIAL	*|
\****************************/

function makeCArithmetic()
{
	var z=Complex.randnz(6, 6);
	var w=Complex.randnz(4, 6);
	qString="\\begin{array}{l}\\mbox{Given }z="+z.write()+"\\mbox{ and }w="+w.write()+"\\mbox{, compute:}\\\\";
	qString+="\\mbox{(i) }z+w\\\\\\mbox{(ii) }z\\times w\\\\\\mbox{(iii) }\\frac{z}{w}\\\\\\mbox{(iv) }\\frac{w}{z}\\end{array}";
	aString="\\mbox{(i) }"+z.add(w.Re, w.Im).write()+"\\mbox{; (ii) }"+z.times(w.Re, w.Im).write()+"\\mbox{; (iii) }"+z.divide(w.Re, w.Im).write()+"\\mbox{; (iv) }"+w.divide(z.Re, z.Im).write()+"\\mbox{.}";
	var qa=[qString,aString];
	return qa;
}

function makeCPolar()
{
	var z=(rand()?Complex.randnz(6, 6):Complex.randnz(6, 4));
	qString="\\mbox{Convert }"+z.write()+"\\mbox{ to modulus-argument form.}";
	var ma=Complex.ctop(z);
	var r=Math.round(ma[0]);
	var t=guessExact(ma[1]/Math.PI);
	aString=(r==1?"":r+"\\times ")+"e^{"+(t==0?"0":t==1?"\\pi i":t+"\\pi i")+"}";
	var qa=[qString,aString];
	return qa;
}

function makeSODE()
{
	var p=new poly(2);
	p.setrand(6);
	p[2]=1;
	var disc=Math.pow(p[1], 2)-4*p[0]*p[2];
	var roots=[0,0];
	if(disc>0)
	{
		roots[0]=(-p[1]+Math.sqrt(disc))/2;
		roots[1]=(-p[1]-Math.sqrt(disc))/2;
	}
	else if(disc==0)
	{
		roots[0]=roots[1]=(-p[1])/2;
	}
	else
	{
		roots[0]=new complex(-p[1]/2, Math.sqrt(-disc)/2);
		roots[1]=new complex(-p[1]/2, -Math.sqrt(-disc)/2);
	}
	var qString="\\begin{array}{l}\\mbox{Find the general solution of the following second-order ODE:}\\\\ "+p.write('D').replace("D^2", "\\frac{{\\,d^2}y}{{\\,dx}^2}").replace("D", "\\frac{\\,dy}{\\,dx}")+(p[0]==0?"":"y")+"=0"+"\\end{array}";
	qString=qString.replace(/1y/g, "y");
	var aString="";
	if(disc>0)
	{
		aString="y="+(guessExact(roots[0])==0?"A":"Ae^{"+ascoeff(guessExact(roots[0]))+"x}")+"+"+(guessExact(roots[1])==0?"B":"Be^{"+ascoeff(guessExact(roots[1]))+"x}");
	}
	else if(disc==0)
	{
		if(roots[0]==0)
		{
			aString="y=Ax+B";
		}
		else
		{
			aString="y=(Ax+B)"+(guessExact(roots[0])?"e^{"+ascoeff(guessExact(roots[0]))+"x}":"");
		}
	}
	else
	{
		aString="y=A\\cos\\left("+ascoeff(guessExact(roots[0].Im))+"x+\\varepsilon\\right)"+(guessExact(roots[0].Re)?"e^{"+ascoeff(guessExact(roots[0].Re))+"x}":"");
	}
	var qa=[qString,aString];
	return qa;
}

function makeMatrix2()
{
	var A=new matrix(2);A.setrand(6);
	var B=new matrix(2);B.setrand(6);
	if(B.det()==0) B[0][0]++;
	if(B.det()==0) B[0][1]++;
	if(B.det()==0) {B[0][1]--; B[1][0]++;};
	if(B.det()==0) alert('Bad math things happening in makeMatrix2(), eek!'); // THIS SHOULD NEVER EVER EVER HAPPEN
	var qString="\\begin{array}{l}\\mbox{Let }A="+A.write()+", B="+B.write()+".\\\\";
	qString+="\\mbox{Compute: (i) }A+B\\mbox{, (ii) }A \\times B\\mbox{, (iii) }B^{-1}\\mbox{.}\\end{array}";
	var S=A.add(B);
	var P=A.times(B);
	var Y=B.inv();
	var aString="(i) "+S.write()+", (ii) "+P.write()+", (iii) "+Y.write();
	var qa=[qString,aString];
	return qa;
}

function makeTaylor()
{
	var f=['\\sin(z)', '\\cos(z)', '\\arctan(z)', 'e^{z}', '\\log_{e}(1+z)'];
	var t=[[new frac(0), new frac(1), new frac(0), new frac(-1, 6)], [new frac(1), new frac(0), new frac(-1, 2), new frac(0)], [new frac(0), new frac(1), new frac(0), new frac(-1, 3)], [new frac(1), new frac(1), new frac(1, 2), new frac(1, 6)], [new frac(0), new frac(1), new frac(-1, 2), new frac(1, 3)]];
	var which=rand(0, 4);
	var n=randfrac(6);
	if(n.top==0) n=new frac(1);
	var qString="\\mbox{Find the Taylor series of }"+f[which].replace(/z/g, fcoeff(n, 'x'))+"\\mbox{ about }x=0\\mbox{ up to and including the term in }x^3";
	var p=new fpoly(3);
	for(var i=0;i<=3;i++)
	{
		p[i]=new frac(t[which][i].top*Math.pow(n.top, i),t[which][i].bot*Math.pow(n.bot, i));
	}
	var aString=p.rwrite();
	var qa=[qString,aString];
	return qa;
}

function makePolarSketch()
{
	var fnf=new Array(Math.sin, Math.tan, Math.cos, function(x){return x;});
	var fnn=new Array("\\sin(z)", "\\tan(z)", "\\cos(z)", "z");
	var which=rand(0, 3);
	var parms=0;
	var fn=0;
	var a=rand(0, 3);
	var b=rand(1, (which==3?1:5));
	qString="\\mbox{Sketch the curve given in polar co-ordinates by }r="+(a?a+"+":"")+fnn[which].replace(/z/g, ascoeff(b)+'\\theta')+"\\mbox{ (where }\\theta\\mbox{ runs from }-\\pi\\mbox{ to }\\pi\\mbox{).}";
	aString='%GRAPH%';
	fn=function drawIt(parms)
	{
		var f=parms[0];
		var d1 = [];
		for(var i=-1;i<=1; i+=0.005)
		{
			var r=parms[1]+f(i*Math.PI*parms[2]);
			var x=r*Math.cos(i*Math.PI);
			if(Math.abs(x)>6)
				x=null;
			var y=r*Math.sin(i*Math.PI);
			if(Math.abs(y)>6)
				y=null;
			if(x&&y)
				d1.push([x, y]);
			else
				d1.push([null, null]);
		}
		$.plot($("#graph"), [d1]);
	}
	parms=[fnf[which], a, b];
	var qa=[qString,aString,fn,parms];
	return qa;
}

function makeMatrix3()
{
	var A=new fmatrix(3);A.setrand(4);
	var B=new fmatrix(3);B.setrand(4);
	if(B.det().top==0) B[0][0]=B[0][0].add(1, 0);
	if(B.det().top==0) B[0][1]=B[0][1].add(1, 0);
	if(B.det().top==0) B[0][2]=B[0][2].add(1, 0);
	if(B.det().top==0) B[1][1]=B[1][1].add(1, 0);
	if(B.det().top==0) B[1][2]=B[1][2].add(1, 0);
	if(B.det().top==0) B[2][2]=B[2][2].add(1, 0);
	if(B.det().top==0) alert('Bad math things happening in makeMatrix3(), eek!'); // THIS SHOULDN'T HAPPEN, BUT I'M NOT 100% SURE IT CAN'T
	var qString="\\begin{array}{l}\\mbox{Let }A="+A.write()+", B="+B.write()+".\\\\";
	qString+="\\mbox{Compute: (i) }A+B\\mbox{, (ii) }A \\times B\\mbox{, (iii) }B^{-1}\\mbox{.}\\end{array}";
	var S=A.add(B);
	var P=A.times(B);
	var Y=B.inv();
	var aString="(i) "+S.write()+", (ii) "+P.write()+", (iii) "+Y.write();
	var qa=[qString,aString];
	return qa;
}

function makeFurtherVector()
{
	var a=new vector(3);a.setrand(5);
	var b=new vector(3);b.setrand(5);
	var c=new vector(3);c.setrand(5);
	var qString="\\begin{array}{l}\\mbox{Let }a="+a.write()+", b="+b.write()+", c="+c.write()+".\\\\";
	qString+="\\mbox{Calculate:}\\\\\\mbox{(i) the vector product, }a\\wedge b\\\\\\mbox{(ii) the scalar triple product, }[a, b, c]\\end{array}";
	var axb=a.cross(b);
	var abc=axb.dot(c);
	var aString="\\mbox{(i) }"+axb.write()+"\\mbox{, (ii) }"+abc;
	var qa=[qString,aString];
	return qa;
}

function makeNewtonRaphson()
{
	var fns=new Array("\\ln(z)", "e^{z}", "\\csc(z)", "\\sec(z)", "\\sin(z)", "\\tan(z)", "\\cos(z)");
	var difs=new Array("\\frac{1}{z}", "e^{z}", "-\\csc(z)\\cot(z)", "\\sec(z)\\tan(z)", "\\cos(z)", "\\sec^2(z)", "-\\sin(z)");
	var fnf=new Array(Math.log, Math.exp, function(x) {return 1/Math.sin(x);}, function(x) {return 1/Math.cos(x);}, Math.sin, Math.tan, Math.cos);
	var diff=new Array(function(x) {return 1/x;}, Math.exp, function(x) {return Math.cos(x)/Math.pow(Math.sin(x), 2);}, function(x) {return Math.sin(x)/Math.pow(Math.cos(x), 2);}, Math.cos, function(x) {return 1/Math.pow(Math.cos(x), 2);}, function(x) {return -Math.sin(x);});
	var which=rand(0, 6);
	var p=new poly(2);
	p.setrand(6);p[2]=1;
	var np=new poly(2);
	for(var i=0;i<=2;i++)
	{
		np[i]=-p[i];
	}
	var q=new poly(1); p.diff(q);
	var nq=new poly(1); np.diff(nq);
	var n=rand(4, 6);
	var x=new Array;x.length=n+1;x[0]=rand((which?0:2), 4);
	var qString="\\begin{array}{l}\\mbox{Use the Newton-Raphson method to find the first }"+n+"\\mbox{ iterates in}\\\\\\mbox{solving }"+p.write()+" = "+fns[which].replace(/z/g, 'x')+"\\mbox{ with }x_0 = "+x[0]+"\\mbox{.}\\end{array}";
	var aString="\\begin{array}{l}\\mbox{Iteration: }x_{n+1}=x_{n}-\\frac{"+fns[which].replace(/z/g, 'x_n')+np.write()+"}{"+difs[which].replace(/z/g, 'x_n')+nq.write()+"}\\\\";
	for(var i=0;i<n;i++)
	{
		var eff=fnf[which](x[i])-p.compute(x[i]);
		var effdash=diff[which](x[i])-q.compute(x[i]);
		x[i+1]=x[i]-(eff/effdash);
		if(Math.abs(x[i+1])<1e-7) x[i+1]=0;
		aString+="x_{"+(i+1)+"} = "+x[i+1]/*+"&"+p.write('x_{'+(i+1)+'}')+'='+p.compute(x[i+1])+"&"+fns[which].replace(/z/g, 'x_{'+(i+1)+'}')+"="+fnf[which](x[i+1])*/+"\\\\";
	}
	aString+="\\end{array}";
	if(isNaN(x[n]))
		return(makeNewtonRaphson()); //TODO: find a better way; this is worst-case infinite
	var qa=[qString,aString];
	return qa;
}

function makeFurtherIneq()
{
	var A=distrandnz(2, 6);
	var B=distrandnz(2, 6);
	var C=distrand(2, 6);
	var qString="\\begin{array}{l}\\mbox{Find the range of values of }x\\mbox{ for which}\\\\"
	qString+="\\frac{"+A[0]+"}{"+p_linear(B[0], C[0]).write()+"} < \\frac{"+A[1]+"}{"+p_linear(B[1], C[1]).write()+"}\\end{array}";
	var aString="";
	var aedb=A[0]*B[1]-A[1]*B[0];
	var root=new frac(A[1]*C[0]-A[0]*C[1], aedb);
	var poles=[new frac(-C[0], B[0]), new frac(-C[1], B[1])]; // both always exist, but they mightn't be distinct
	if(aedb==0) // AE=DB
	{
		// singular
		if(poles[0].equals(poles[1])) // always equal
		{
			aString="\\mbox{The two fractions are equivalent, so the inequality never holds.}";
		}
		else // never equal
		{
			// changes at poles
			var m=new Array(2);
			for(var i=0;i<2;i++)
				m[i]=poles[i].top/poles[i].bot;
			var l=ranking(m);
			// state for lge -ve x? < if poles[0]>poles[1]
			if(m[0]>m[1])
			{
				aString="x < "+poles[l[0]].write()+" \\mbox{ or }"+poles[l[1]].write()+" < x";
			}
			else
			{
				aString=poles[l[0]].write()+" < x < "+poles[l[1]].write();
			}
		}
	}
	else
	{
		if(poles[0].equals(poles[1]))
		{
			//for x<-C/B iff A/B > D/E
			var i=A[0]/B[0], j=A[1]/B[1];
			if(i>j)
			{
				aString="x < "+poles[0].write();
			}
			else
			{
				aString=poles[0].write()+" < x";
			}
		}
		else
		{
			// changes at root and poles, all distinct
			var n=[root, poles[0], poles[1]];
			var m=new Array(3);
			for(var i=0;i<3;i++)
				m[i]=n[i].top/n[i].bot;
			var l=ranking(m);
			// state for lge -ve x? < if i>j
			var i=A[0]/B[0], j=A[1]/B[1];
			if(i>j)
			{
				aString="x < "+n[l[0]].write()+"\\mbox{ or }"+n[l[1]].write()+" < x < "+n[l[2]].write();
			}
			else
			{
				aString=n[l[0]].write()+" < x < "+n[l[1]].write()+"\\mbox{ or }"+n[l[2]].write()+" < x";
			}
		}
	}
	var qa=[qString,aString];
	return qa;
}

function makeSubstInt() /* Has issues with polys which are never in the domain of, say, arcsin; worked around for now */
{
	var p=new poly(rand(1, 2)); p.setrand(2);
	var fns=["\\ln(Az)", "e^{Az}", p.rwrite('z')];
	var fsq=["(\\ln(Az))^2", "e^{2Az}", polyexpand(p, p).write('z')];
	var q=new poly(p.rank-1);p.diff(q);
	var difs=["\\frac{A}{z}", "Ae^{Az}", q.write('z')];
	var t=["\\arcsin(f)", "\\arctan(f)", "{\\rm arsinh}(f)", "{\\rm artanh}(f)"];
	var dt=["\\frac{y}{\\sqrt{1-F}}", "\\frac{y}{1+F}", "\\frac{y}{\\sqrt{1+F}}", "\\frac{y}{1-F}"];
	var pm=[-1, 1, 1, -1];
	var ldt=["\\frac{A}{y\\sqrt{1-F}}", "\\frac{A}{y(1+F)}", "\\frac{A}{y\\sqrt{1+F}}", "\\frac{A}{y(1-F)}"];
	var pdt=["\\frac{y}{\\sqrt{F}}", "\\frac{y}{F}", "\\frac{y}{\\sqrt{F}}", "\\frac{y}{F}"];
	var which=rand(0, 2);
	var what=rand(0, 3);
	if(what==0 && which==2)
	{
		which=rand(0, 1); // It's easier this way, no worrying about "when do solns exist"
	}
	var a=randnz(4);
	var qString="\\mbox{Find }\\int";
	// special cases: polys and ln
	if(which==0)
	{
		qString+=ldt[what].replace(/y/g, 'x').replace(/F/g, fsq[which].replace(/A/g, ascoeff(a))).replace(/z/g, 'x').replace(/A/g, a)+"\\,dx";
	}
	else if(which==2)
	{
		var r=polyexpand(p, p);
		r.xthru(pm[what]);
		r[0]++;
		qString+=pdt[what].replace(/y/g, difs[which]).replace(/F/g, r.rwrite('z')).replace(/z/g, 'x')+"\\,dx";
	}
	else
	{
		qString+=dt[what].replace(/y/g, difs[which]).replace(/F/g, fsq[which]).replace(/z/g, 'x').replace("2A", ascoeff(2*a)).replace(/A/g, ascoeff(a))+"\\,dx";
	}
	var aString=t[what].replace(/f/g, fns[which]).replace(/z/g, 'x').replace(/A/g, ascoeff(a))+"+c";
	var qa=[qString,aString];
	return qa;
}

/* Note: Important not to let things become negative.  Can't just apply an abs() here and there, because areas of integrals might cancel out */
function makeRevolution()
{
	function makeSolidRevolution()
	{
		var fns=["\\sec(z)", "\\csc(z)", "\\sqrt{z}"];
		var iss=["\\tan(z)", "-\\cot(z)", 0];
		var isf=[Math.tan, function(x){return -1/Math.tan(x);}, function(x){return Math.pow(x, 2)/2;}];
		var which=rand(0, 2);
		var x0=0;if(which==1) x0++;
		var x=rand(x0+1, x0+((which==2)?4:1));
		var qString="\\begin{array}{c}\\mbox{Find the volume of the solid formed when the area under}\\\\";
		qString+="y = "+fns[which].replace(/z/g, 'x')+"\\\\";
		qString+="\\mbox{from }x = "+x0+"\\mbox{ to }x = "+x+"\\mbox{ is rotated through }2\\pi\\mbox{ around the x-axis.}\\end{array}";
		var ans;
		if(which==2)
		{
			ans=guessExact(isf[which](x)-isf[which](x0));
		}
		else
		{
			ans="\\left("+iss[which].replace(/z/g, x)+(isf[which](x0)==0?"":"-"+iss[which].replace(/z/g, x0))+"\\right)";
			ans=ans.replace(/--/g, "+");
		}
		var aString=ans+"\\pi";
		var qa=[qString,aString];
		return(qa);
	}
	function makeSurfaceRevolution()
	{
		a=new poly(rand(1, 3));
		a.setrand(6);
		for(var i=0;i<=a.rank;i++)
			a[i]=Math.abs(a[i]);
		b=new fpoly(3);
		b.setpoly(a);
		c=new fpoly(4);
		b.integ(c);
		
		var x=rand(1, 4);
		
		var qString="\\begin{array}{c}\\mbox{Find the area of the surface formed when the curve}\\\\";
		qString+="y = "+a.write('x')+"\\\\";
		qString+="\\mbox{from }x = 0\\mbox{ to }x = "+x+"\\mbox{ is rotated through }2\\pi\\mbox{ around the x-axis.}\\end{array}";
		var hi=c.compute(x); // lo is going to be 0 since our lower limit on the integral is 0, and the antiderivs are polys with no (or arb) constant term
		ans=new frac(hi.top, hi.bot);
		ans.prod(2);
		var aString=fcoeff(ans, "\\pi");
		var qa=[qString,aString];
		return(qa);
	}
	var qa;
	if(rand()) qa=makeSolidRevolution();
	else qa=makeSurfaceRevolution();
	return qa;
}

function makeMatXforms()
{
	var a=rand(1, 3);
	var xfms=new Array(5);
	for(var i=0;i<5;i++) xfms[i]=new matrix(2);
	xfms[0].set(Math.cos(a*Math.PI/2), -Math.sin(a*Math.PI/2), Math.sin(a*Math.PI/2), Math.cos(a*Math.PI/2));
	xfms[1].set(Math.cos(a*Math.PI/2), Math.sin(a*Math.PI/2), Math.sin(a*Math.PI/2), -Math.cos(a*Math.PI/2));
	xfms[2].set(1, a, 0, 1);
	xfms[3].set(1, 0, a, 1);
	xfms[4].set(a+1, 0, 0, a+1);
	var f=new frac(a, 2);
	var xft=["\\mbox{a rotation through }"+fcoeff(f, "\\pi")+"\\mbox{ anticlockwise about O}", (a==2?"\\mbox{a reflection in the line }x=0":"\\mbox{reflection in the line }y = "+ascoeff(guessExact(Math.tan(a*Math.PI/4)))+"x"), "\\mbox{a shear of element }"+a+"\\mbox{, }x\\mbox{ axis invariant}", "\\mbox{a shear of element }"+a+"\\mbox{, }y\\mbox{ axis invariant}", "\\mbox{an enlargement of scale factor }"+(a+1)];
	var which=distrand(2, 0, 4);
	var qString="\\begin{array}{l}\\mbox{Compute the matrix representing, in 2D, }"+xft[which[0]]+"\\\\\\mbox{ followed by }"+xft[which[1]]+"\\end{array}";
	var ans=xfms[which[1]].times(xfms[which[0]]);
	var aString=ans.write();
	var qa=[qString,aString];
	return(qa);
}

/****************************\
|*	START OF STATS MATERIAL	*|
\****************************/

function makeDiscreteDistn()
{
	var nparms=[2, 1, 1];
	var massfn=[massBin, massPo, massGeo];
	var pd=rand(2, 6);
	var pn=rand(1, pd-1);
	var f=new frac(pn, pd);
	var p=pn/pd;
	var parms=[[rand(5, 12), p], [rand(1, 5)], [p]];
	var dists=['{\\rm B}\\left('+parms[0][0]+', '+f.write()+'\\right)','{\\rm Po}('+parms[1][0]+')','{\\rm Geo}\\left('+f.write()+'\\right)'];
	var x=rand(1, 4);
	var which=rand(0, 2);
	var leq=rand();
	var qString="\\mbox{The random variable }X\\mbox{ is distributed as }"+dists[which]+"\\mbox{.  Find }\\mathbb{P}(X"+(leq?"\\le":"=")+x+")";
	var ans;
	if(leq)
	{
		ans=0;
		for(var i=0;i<=x;i++)
			ans+=massfn[which](i, parms[which][0], parms[which][1]);
	}
	else
	{
		ans=massfn[which](x, parms[which][0], parms[which][1]);
	}
	var aString=Math.round(ans*1e6)/1e6;
	var qa=[qString,aString];
	return(qa);
}

function makeContinDistn()
{
	tableN.populate();
	var mu=rand(0, 4);
	var sigma=rand(1, 4);
	var x=mu+Math.round((Math.random()-0.5)*6*sigma*10)/10;
	var qString="\\begin{array}{l}\\mbox{The random variable }X\\mbox{ is normally distributed with mean }"+mu+"\\mbox{ and variance }"+sigma*sigma+"\\\\";
	qString+="\\mbox{Find }\\mathbb{P}(X\\le"+x+")\\end{array}";
	var z=(x-mu)/sigma;
	var p=tableN.values[Math.floor(1e3*Math.abs(z))];
	if(z<0) p=1-p;
	var aString=Math.round(p*1e3)/1e3;
	var qa=[qString,aString];
	return(qa);
}

function makeHypTest()
{
	if(rand())
	{
		var mu=new Array(2); // 0 = H-null, 1 = actual
		var sigma=new Array(2);
		var which=0; // 0: =.  1: <.  2: >.
		var n=rand(8, 12);
		var sl=pickrand(1, 5, 10);
		if(rand())
		{
			mu[1]=mu[0]=rand(-1, 5);
			sigma[1]=sigma[0]=rand(1, 4);
			which=rand(0, 2);
		}
		else
		{
			mu=distrand(2, -1, 5);
			sigma[0]=rand(1, 4);
			sigma[1]=rand(1, 4);
			which=rand()?(mu[0]<mu[1]?2:1):0;
		}
		var Sx=genN(mu[1]*n, sigma[1]*Math.sqrt(n));
		var qString="\\begin{array}{l}\\mbox{In a hypothesis test, the null hypothesis }{\\rm H}_0\\mbox{ is that }X\\\\\\mbox{ is normally distributed, with }\\mu = "+mu[0]+"\\mbox{, }\\sigma^2 = "+sigma[0]*sigma[0]+"\\\\";
		qString+="\\mbox{The alternative hypothesis }{\\rm H}_1\\mbox{ is that }\\mu"+['\\ne','<','>'][which]+mu[0]+"\\\\";
		qString+="\\mbox{The significance level is }"+sl+"\\%\\\\";
		qString+="\\mbox{A sample of size }"+n+"\\mbox{ is drawn from }X\\mbox{, and its sum }\\sum{x} = "+Math.round(Sx*1e3)/1e3+"\\\\";
		qString+="\\mbox{(i) Compute }\\overline{x}\\\\\\mbox{(ii) Is }{\\rm H}_0\\mbox{ accepted?}\\end{array}";
		var xbar=Sx/n;
		var aString="\\begin{array}{l}\\mbox{(i) }\\overline{x} = "+Math.round(xbar*1e3)/1e3+"\\\\";
		var p=0;
		if(which) // one tail
		{
			switch(sl)
			{
				case 1:
					p=4;
				break;
				case 5:
					p=2;
				break;
				case 10:
					p=1;
				break;
			}
		}
		else // two tail
		{
			switch(sl)
			{
				case 1:
					p=5;
				break;
				case 5:
					p=3;
				break;
				case 10:
					p=2;
				break;
			}
		}
		var critdev=sigma[0]*tableT.values[tableT.values.length-1][p]/Math.sqrt(n);
		if(which)
		{
			aString+="\\mbox{(ii) The critical region is }\\overline{x}"+(which==1?"<"+Math.round((mu[0]-critdev)*1e3)/1e3:">"+Math.round((mu[0]+critdev)*1e3)/1e3)+"\\mbox{; }";
		}
		else
		{
			aString+="\\mbox{(ii) The critical values are }"+(Math.round((mu[0]-critdev)*1e3)/1e3)+"\\mbox{ and }"+(Math.round((mu[0]+critdev)*1e3)/1e3)+"\\mbox{; }";
		}
		var acc=false;
		switch(which)
		{
			case 0:
				acc=(xbar>=mu[0]-critdev)&&(xbar<=mu[0]+critdev);
			break;
			case 1:
				acc=(xbar>=mu[0]-critdev);
			break;
			case 2:
				acc=(xbar<=mu[0]+critdev);
			break;
		}
		aString+=acc?"{\\rm H}_0\\mbox{ is accepted.}":"{\\rm H}_0\\mbox{ is rejected.}";
		aString+="\\end{array}";
		var qa=[qString,aString];
		return(qa);
	}
	else
	{
		var mu=new Array(2); // 0 = H-null, 1 = actual
		var sigma;
		var which=0; // 0: =.  1: <.  2: >.
		var n=rand(10, 25);
		var sl=pickrand(1, 5, 10);
		if(rand())
		{
			mu[1]=mu[0]=rand(-1, 5);
			sigma=rand(1, 4);
			which=rand(0, 2);
		}
		else
		{
			mu=distrand(2, -1, 5);
			sigma=rand(1, 4);
			which=rand()?(mu[0]<mu[1]?2:1):0;
		}
		var Sx=0,Sxx=0;
		for(var i=0;i<n;i++)
		{
			var xi=genN(mu[1], sigma);
			Sx+=xi;
			Sxx+=(xi*xi);
		}
		var qString="\\begin{array}{l}\\mbox{In a hypothesis test, the null hypothesis }{\\rm H}_0\\mbox{ is that }X\\\\\\mbox{ is normally distributed, with }\\mu = "+mu[0]+"\\\\";
		qString+="\\mbox{The alternative hypothesis }{\\rm H}_1\\mbox{ is that }\\mu"+['\\ne','<','>'][which]+mu[0]+"\\\\";
		qString+="\\mbox{The significance level is }"+sl+"\\%\\\\";
		qString+="\\mbox{A sample of size }"+n+"\\mbox{ is drawn from }X\\mbox{, and its sum }\\sum{x} = "+Math.round(Sx*1e3)/1e3+"\\\\";
		qString+="\\mbox{The sum of squares, }\\sum{x^2} = "+Math.round(Sxx*1e3)/1e3+"\\\\";
		qString+="\\mbox{(i) Compute }\\overline{x}\\\\";
		qString+="\\mbox{(ii) Compute an estimate, }S^2\\mbox{, of the variance of }X\\\\";
		qString+="\\mbox{(iii) Is }{\\rm H}_0\\mbox{ accepted?}\\end{array}";
		var xbar=Sx/n;
		var aString="\\begin{array}{l}\\mbox{(i) }\\overline{x} = "+Math.round(xbar*1e3)/1e3+"\\\\";
		var SS=(Sxx-Sx*Sx/n)/(n-1);
		aString+="\\mbox{(ii) }S^2 = "+Math.round(SS*1e3)/1e3+"\\\\";
		aString+="\\mbox{Under }{\\rm H}_0\\mbox{, }{\\frac{\\overline{X}"+(mu[0]?(mu[0]>0?"-":"+")+Math.abs(mu[0]):"")+"}{"+Math.round(Math.sqrt(SS/n)*1e3)/1e3+"}}\\sim t_{"+(n-1)+"}\\\\";
		var p=0;
		if(which) // one tail
		{
			switch(sl)
			{
				case 1:
					p=4;
				break;
				case 5:
					p=2;
				break;
				case 10:
					p=1;
				break;
			}
		}
		else // two tail
		{
			switch(sl)
			{
				case 1:
					p=5;
				break;
				case 5:
					p=3;
				break;
				case 10:
					p=2;
				break;
			}
		}
		var critdev=Math.sqrt(SS)*tableT.values[n-2][p]/Math.sqrt(n);
		if(which)
		{
			aString+="\\mbox{(iii) The critical region is }\\overline{x}"+(which==1?"<"+Math.round((mu[0]-critdev)*1e3)/1e3:">"+Math.round((mu[0]+critdev)*1e3)/1e3)+"\\mbox{; }";
		}
		else
		{
			aString+="\\mbox{(iii) The critical values are }"+(Math.round((mu[0]-critdev)*1e3)/1e3)+"\\mbox{ and }"+(Math.round((mu[0]+critdev)*1e3)/1e3)+"\\mbox{; }";
		}
		var acc=false;
		switch(which)
		{
			case 0:
				acc=(xbar>=mu[0]-critdev)&&(xbar<=mu[0]+critdev);
			break;
			case 1:
				acc=(xbar>=mu[0]-critdev);
			break;
			case 2:
				acc=(xbar<=mu[0]+critdev);
			break;
		}
		aString+=acc?"{\\rm H}_0\\mbox{ is accepted.}":"{\\rm H}_0\\mbox{ is rejected.}";
		aString+="\\end{array}";
		var qa=[qString,aString];
		return(qa);
	}
}
