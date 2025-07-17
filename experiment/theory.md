<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <link rel="stylesheet" href="./css/imgstyles.css">
</head>
<body>
			<ol>
				<li>
					<h2>Basics of Fourier Transform</h2>
				</li>
			</ol>
			<p>
				Fourier transform is a process to convert a spatial domain signal (i.e., time domain signal) into a frequency domain signal. Oppositely, the inverse Fourier transform is a process to convert the frequency domain signal to the primary time domain signal.
			</p>
			<p>
				&#xa0;
			</p>
			<h3>
		    Fourier transform
			</h3>
			<p>
				The Fourier transform of a time-domain signal is defined as follows
			</p>
			<p>
				X(ω) = <img src="1738659393_fourier-transform/1738659393_fourier-transform-1.png" width="142" height="30" alt="" />ωt) dt
			</p>
			<p>
				<em>&#xa0;</em>
			</p>
			<p>
				<em>**x(t) denotes the signal in the time domain, </em><img src="1738659393_fourier-transform/1738659393_fourier-transform-2.png" width="42" height="24" alt="" /><em> denotes the signal in the frequency domain and </em><img src="1738659393_fourier-transform/1738659393_fourier-transform-3.png" width="14" height="24" alt="" /><em> </em>is the angular frequency.
			</p>
			<p>
				&#xa0;
			</p>
			<h3>
		    Inverse Fourier transform
			</h3>
			<p>
				x(t) = <img src="1738659393_fourier-transform/1738659393_fourier-transform-4.png" width="151" height="33" alt="" />ωt) dt
			</p>
			<p>
				&#xa0;
			</p>
			<h3>
		     Discrete Fourier Transform (DFT)
			</h3>
			<p>
				For digital systems, the Fourier transform is realized by
			</p>
			<p>
				For complex numbers x<sub>0</sub>, x<sub>1</sub>, x<sub>2</sub>, x<sub>3</sub>, … , x<sub>n-1</sub>
			</p>
			<p>
				X[k] = <img src="1738659393_fourier-transform/1738659393_fourier-transform-5.png" width="79" height="25" alt="" /> <em>W</em><em><sub>N</sub></em><em><sup>kn</sup></em><sup> </sup>,&#xa0; where k=1,2,3,..,N-1
			</p>
			<p>
				Where <em>W</em><em><sub>N</sub></em><em><sup> </sup></em>&#xa0;is the n<sup>th</sup> root of unity given by
			</p>
			<p>
				<em>W</em><em><sub>N </sub></em>= exp(-j(2<img src="1738659393_fourier-transform/1738659393_fourier-transform-6.png" width="11" height="31" alt="" /> )
			</p>
			<p>
				&#xa0;
			</p>
			<p>
				**DFT Algorithms are at the end of this article
			</p>
			<p>
				&#xa0;
			</p>
			<h3>
		     Fast Fourier Transform (FFT)
			</h3>
			<p>
				The basic idea of a fast Fourier transform is to break up a transform of length N into two transforms of length N/2. 
			</p>
			<p>
				For complex numbers x[n] where, n = 1, 2, 3, …, n-1
			</p>
			<p>
				X[k] = <img src="1738659393_fourier-transform/1738659393_fourier-transform-5.png" width="79" height="25" alt="" /><em> W</em><em><sub>N</sub></em><em><sup>kn</sup></em><em> </em>= <img src="1738659393_fourier-transform/1738659393_fourier-transform-7.png" width="96" height="37" alt="" />e<sup>-j2πk(2r)/N</sup> + <img src="1738659393_fourier-transform/1738659393_fourier-transform-8.png" width="129" height="37" alt="" />e<sup>-j2πk(2r+1)/N</sup>
			</p>
			<p>
				<em>**In the above transform of length N is broken into two transforms of length N/2 and on the other hand, they pick up even and odd samples of x[n] separately</em>
			</p>
			<p>
				= <img src="1738659393_fourier-transform/1738659393_fourier-transform-7.png" width="96" height="37" alt="" />e<sup>-j2πk(2r)/N</sup> + e<sup>-j2πk/N</sup> <img src="1738659393_fourier-transform/1738659393_fourier-transform-8.png" width="129" height="37" alt="" />e<sup>-j2πk(2r)/N</sup>
			</p>
			<p>
				= <img src="1738659393_fourier-transform/1738659393_fourier-transform-7.png" width="96" height="37" alt="" />e<sup>-j2πkr/(N/2)</sup> + e<sup>-j2πk/N</sup> <img src="1738659393_fourier-transform/1738659393_fourier-transform-8.png" width="129" height="37" alt="" />e<sup>-j2πkr/(N/2)</sup>
			</p>
			<p>
				<img src="1738659393_fourier-transform/1738659393_fourier-transform-9.png" width="630" height="359" alt="" />
			</p>
			<p>
				In the above diagram {<strong>X[0], X[1], X[2], X[3], X[4], X[5], X[6], X[7]</strong>} is the Fourier transform of {x[0], x[1], x[2], x[3], x[4], x[5], x[6], x[7]} 
			</p>
			<p>
				&#xa0;
			</p>
			<p>
				**FFT algorithms are at the end of this article
			</p>
			<p>
				&#xa0;
			</p>
					<h3>Advantages of FFT over DFT</h3>
			<p>
				To compute the DFT of an N-point sequence it take O(N<sup>2</sup>) multiplies and adds. The FFT algorithm computes the DFT using O(N log N) multiplies and adds. 
			</p>
			<p>
				The fast Fourier transform (FFT) is a discrete Fourier transform algorithm which reduces the number of computations needed for N points from 2N<sup>2</sup> to 2Nlog<sub>2</sub>N.
			</p>
			<p>
				&#xa0;
			</p>
			<br/>
		    <h2>Properties of Fourier Transform</h2>
			<ol>
				<li>
					<h3>Linearity</h3>
				</li>
			</ol>
			<p>
				The Fourier Transform satisfies linearity &amp; principle of superposition
			</p>
			<p>
				Consider two functions x<sub>1</sub>(t) &amp; x<sub>2</sub>(t)
			</p>
			<p>
				If F(x<sub>1</sub>(t)) = X<sub>1</sub>(ω),&#xa0; F(x<sub>2</sub>(t)) = X<sub>2</sub>(ω)
			</p>
			<p>
				Then F[a<sub>1</sub>x<sub>1</sub>(t) + a<sub>2</sub>x<sub>2</sub>(t)] = a<sub>1</sub>X<sub>1</sub>(ω) + a<sub>2</sub>X<sub>2</sub>(ω)&#xa0;
			</p>
			<p>
				&#xa0;
			</p>
			<p>
				&#xa0;
			</p>
				<li>
					<h3>Scaling</h3>
				</li>
			<p>
				F(x(t)) = X(ω)
			</p>
			<p>
				If ‘a’ is real constant then 
			</p>
			<p>
				&#xa0;F(x(at)) = <img src="1738659393_fourier-transform/1738659393_fourier-transform-10.png" width="18" height="36" alt="" />X(ω),&#xa0; 
			</p>
			<p>
				&#xa0;
			</p>
				<li>
					<h3>Symmetry</h3>
				</li>
			<p>
				When x(t) is real and even then X(ω) = X<sup>*</sup>(-ω)
			</p>
			<p>
				When x(t) is real and odd then X(ω) = X(-ω)
			</p>
			<p>
				&#xa0;
			</p>
				<li>
					<h3>Convolution</h3>
				</li>
			<p>
				Fourier transform makes the convolution of 2 signals into the product of their Fourier Transform. There are two types of convolutions, one for time domain and other for frequency domain.
			</p>
				<li>
					<h4>Time domain convolution</h4>
				</li>
			<p>
				F(x<sub>1</sub>(t)) = X<sub>1</sub>(ω),&#xa0; F(x<sub>2</sub>(t)) = X<sub>2</sub>(ω)
			</p>
			<p>
				Then F(x<sub>1</sub>(t)* x<sub>2</sub>(t)) = X<sub>1</sub>(ω) . X<sub>2</sub>(ω),&#xa0;&#xa0;&#xa0; [‘*’ – convolution sign)]
			</p>
			<p>
				&#xa0;
			</p>
				<li>
					<h4>Frequency domain convolution</h4>
				</li>
			<p>
				F(x<sub>1</sub>(t) . x<sub>2</sub>(t)) = 1/2<img src="1738659393_fourier-transform/1738659393_fourier-transform-11.png" width="12" height="24" alt="" />.X<sub>1</sub>(ω) * X<sub>2</sub>(ω)&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; [‘*’ – convolution sign)]
			</p>
			<p>
				&#xa0;
			</p>
				<li>
					<h3>Shifting Property</h3>
				</li>
			<p>
				F(x(t – t<sub>0</sub>)) = e<sup>-j</sup><sup>ω</sup><sup>t0 </sup>X(ω)
			</p>
			<p>
				As a consequence, transforms leave the Fourier spectrum | X(ω)|<sup>2</sup> unchanged.
			</p>
			<p>
				&#xa0;
			</p>
				<li>
					<h3>Duality</h3>
				</li>
			<p>
				F(x(t) =&#xa0; X(t) = 2<img src="1738659393_fourier-transform/1738659393_fourier-transform-11.png" width="12" height="24" alt="" /> x(-ω)
			</p>
			<p>
				&#xa0;
			</p>
				<li>
					<h3>Differentiation</h3>
				</li>
			<p>
				F(<img src="1738659393_fourier-transform/1738659393_fourier-transform-12.png" width="35" height="34" alt="" /> ) = jωX(ω)
			</p>
			<p>
				&#xa0;
			</p>
				<li>
					<h3>Integration</h3>
				</li>
			<p>
				F<img src="1738659393_fourier-transform/1738659393_fourier-transform-13.png" width="50" height="30" alt="" /><em>(t) dt</em>) = X(ω)/jω 
			</p>
			<p>
				When a function (i.e., x(t)) is not an energy function and hence the Fourier transform of <img src="1738659393_fourier-transform/1738659393_fourier-transform-14.png" width="49" height="30" alt="" /><em>(t) dt</em>] includes an impulse function. 
			</p>
			<p>
				F<img src="1738659393_fourier-transform/1738659393_fourier-transform-13.png" width="50" height="30" alt="" /><em>(t) dt</em>) = X(ω)/jω + <img src="1738659393_fourier-transform/1738659393_fourier-transform-15.png" width="10" height="18" alt="" />X<img src="1738659393_fourier-transform/1738659393_fourier-transform-16.png" width="67" height="24" alt="" />
			</p>
			<p>
				&#xa0;
			</p>
				<li>
					<h3>Modulation Property</h3>
				</li>
			<p>
				F{x(t)<em>cosat</em>} = ½ {X(ω + a) + X(ω - a)}
			</p>
			<p>
				F{x(t)<em>sinat</em>} = ½ {X(ω + a) - X(ω - a)}
			</p>
			<p>
				&#xa0;
			</p>
				<li>
					If the Fourier transform of f(x) is F(k), then f<sup>*</sup>(x) &lt;=&gt;&#xa0; F<sup>*</sup>(-k)
				</li>
			<p>
				As a consequence Fourier transform of a real function must satisfy the symmetry relation. 
			</p>
			<p>
				F(k) = F<sup>*</sup>(-k), meaning that the Fourier transform is symmetric about the origin in k-space. |F(k)|<sup>2</sup> = |F(-k)|<sup>2</sup>
			</p>
			<p>
				<strong>&#xa0;</strong>
			</p>
				<li>
				<h3>Parseval’s theorem</h3>
				</li>
			<p>
				Energy = <img src="1738659393_fourier-transform/1738659393_fourier-transform-17.png" width="49" height="30" alt="" /><strong><em>(t)|</em></strong><strong><em><sup>2</sup></em></strong><strong><em>dt = 1/2</em></strong><img src="1738659393_fourier-transform/1738659393_fourier-transform-18.png" width="10" height="18" alt="" /> <img src="1738659393_fourier-transform/1738659393_fourier-transform-19.png" width="51" height="30" alt="" /><strong><em>(</em></strong><strong>ω</strong><strong><em>)|</em></strong><strong><em><sup>2</sup></em></strong><strong><em>d</em></strong><strong>ω</strong>
			</p>
			<p>
				The total energy in the time domain signal, x(t) [i.e., the left integral] can be easily calculated from the frequency domain signal, <em>X(</em><em>ω) </em>[i.e., from the right integral]
			</p>
			<p>
				&#xa0;
			</p>
				<li>
					<h3>Time reversal</h3>
				</li>
			<p>
				F(x(-t)) = X(-ω)
			</p>
			<p>
				<strong>&#xa0;</strong>
			</p>
		     <h2>Fourier Transform of some common signals</h2>
						<li>
	                     <h3>Fourier Transform of a delta function</h3>
						</li>
					</ol>
				</li>
			</ol>
			<p>
				<img src="1738659393_fourier-transform/1738659393_fourier-transform-20.png" width="490" height="160" alt="" />
			</p>
			<p>
				If x(t) = 𝛅(t), then Fourier transform,
			</p>
			<p>
				X(ω) = <img src="1738659393_fourier-transform/1738659393_fourier-transform-21.png" width="39" height="30" alt="" /><em>(t)e</em><em><sup>-j</sup></em><sup>ωt</sup><em> dt</em>
			</p>
			<p>
				<em>= </em><img src="1738659393_fourier-transform/1738659393_fourier-transform-22.png" width="43" height="30" alt="" /><em>(t)e</em><em><sup>-j</sup></em><sup>ωt</sup><em> dt</em>
			</p>
			<p>
				<em>= </em><img src="1738659393_fourier-transform/1738659393_fourier-transform-23.png" width="47" height="30" alt="" /><em>e</em><em><sup>-j</sup></em><sup>ω0</sup><em> dt</em>
			</p>
			<p>
				<em>= 1</em>
			</p>
			<p>
				Thus Fourier transform of a delta/impulse is a constant equal to 1, independent of frequency. Remember that derivation is used the shifting property of the impulse to eliminate the integral.
			</p>
			<p>
				&#xa0;
			</p>
				<li>
					<h3>Fourier transform of a unit step function</h3>
				</li>
			<p>
				<strong>&#xa0;</strong>
			</p>
			<p>
				<img src="1738659393_fourier-transform/1738659393_fourier-transform-24.png" width="398" height="149" alt="" />
			</p>
			<p>
				γ (t) = 0 for t&lt;0
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; = 1 for t ≥1
			</p>
			<p>
				We know that a unit-step function is an integration of a delta function. So for a unit step function,
			</p>
			<p>
				γ (t) = <em>&#xa0;</em><img src="1738659393_fourier-transform/1738659393_fourier-transform-22.png" width="43" height="30" alt="" /><em>(t) dt</em>
			</p>
			<p>
				So, X(ω) = <img src="1738659393_fourier-transform/1738659393_fourier-transform-25.png" width="15" height="36" alt="" /> F(<img src="1738659393_fourier-transform/1738659393_fourier-transform-26.png" width="33" height="24" alt="" />) + <img src="1738659393_fourier-transform/1738659393_fourier-transform-15.png" width="10" height="18" alt="" />F(<img src="1738659393_fourier-transform/1738659393_fourier-transform-27.png" width="37" height="24" alt="" />)<img src="1738659393_fourier-transform/1738659393_fourier-transform-28.png" width="41" height="24" alt="" />&#xa0; 
			</p>
			<p>
				<em>[See the property of integration above]</em>
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; = <img src="1738659393_fourier-transform/1738659393_fourier-transform-25.png" width="15" height="36" alt="" /> + <img src="1738659393_fourier-transform/1738659393_fourier-transform-29.png" width="50" height="21" alt="" />&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; [as F(<img src="1738659393_fourier-transform/1738659393_fourier-transform-26.png" width="33" height="24" alt="" />)= F(<img src="1738659393_fourier-transform/1738659393_fourier-transform-27.png" width="37" height="24" alt="" />)=1]
			</p>
			<p>
				When a function (i.e., x(t)) is not an energy function and hence the Fourier transform of <img src="1738659393_fourier-transform/1738659393_fourier-transform-14.png" width="49" height="30" alt="" /><em>(t) dt</em>] includes an impulse function. 
			</p>
			<p>
				&#xa0;
			</p>
				<li>
					<h3> Fourier Transform of a unit pulse function</h3>
				</li>
			<p>
				A pulse function can be represented as,
			</p>
			<p>
				x(t)=Π(t) = γ (t + ½) - γ(t - ½)
			</p>
			<p>
				<img src="1738659393_fourier-transform/1738659393_fourier-transform-30.png" width="432" height="279" alt="" />
			</p>
			<p>
				For a function rect(t) = Π(t) = 1 for |t| ≤ ½
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; = 0 otherwise
			</p>
			<p>
				Given that 
			</p>
			<p>
				x(t) = Π(t)
			</p>
			<p>
				Hence from the definition of the Fourier transform we have
			</p>
			<p>
				F (Π(t)) = X(<img src="1738659393_fourier-transform/1738659393_fourier-transform-31.png" width="15" height="24" alt="" />) = <img src="1738659393_fourier-transform/1738659393_fourier-transform-32.png" width="64" height="30" alt="" />e <sup>-jω</sup><sup>t</sup> dt
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; =&#xa0; <img src="1738659393_fourier-transform/1738659393_fourier-transform-33.png" width="58" height="36" alt="" />e <sup>-jω</sup><sup>t</sup> dt&#xa0;&#xa0;&#xa0;&#xa0; [as Π(t) = 1 for |t| ≤ ½]
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; =&#xa0; [(e <sup>–jω</sup><sup>t</sup>)/-jω]<sub>-1/2</sub><sup>1/2</sup>
			</p>
			<p>
				<sup>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </sup>&#xa0;= [e <sup>–jω</sup><sup>/2</sup> - e <sup>jω</sup><sup>/2</sup>] / -jω
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; = [e <sup>jω</sup><sup>/2</sup> - e <sup>-jω</sup><sup>/2</sup>] / jω
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; = 2/ω . {[e <sup>jω</sup><sup>/2</sup> - e <sup>-jω</sup><sup>/2</sup>] / 2j}
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; = 2/ω . sin(ω/2)
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; = {sin(ω/2) / (ω/2)}
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; = {sin(<img src="1738659393_fourier-transform/1738659393_fourier-transform-34.png" width="19" height="24" alt="" />(ω/2<img src="1738659393_fourier-transform/1738659393_fourier-transform-11.png" width="12" height="24" alt="" />)) / (<img src="1738659393_fourier-transform/1738659393_fourier-transform-11.png" width="12" height="24" alt="" />(ω/2<img src="1738659393_fourier-transform/1738659393_fourier-transform-11.png" width="12" height="24" alt="" />))}
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; = sinc(ω/2<img src="1738659393_fourier-transform/1738659393_fourier-transform-11.png" width="12" height="24" alt="" />)
			</p>
			<p>
				&#xa0;
			</p>
			<p>
				For the above case, the rectangular function has a pulse width value of 1 over the interval of [-½, ½]; 0 otherwise.
			</p>
			<p>
				Now we’ll discuss a rectangular pulse that has a width of T
			</p>
			<p>
				Then,&#xa0;&#xa0;&#xa0; rect(t/T) = Π(t/T) = 1 for |t| ≤ T/2
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; = 0 otherwise
			</p>
			<p>
				Given that 
			</p>
			<p>
				x(t/T) = Π(t/T)
			</p>
			<p>
				Hence from the definition of the Fourier transform we have
			</p>
			<p>
				F (Π(t/T)) = <img src="1738659393_fourier-transform/1738659393_fourier-transform-35.png" width="85" height="30" alt="" />e <sup>-jω</sup><sup>t</sup> dt
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; =&#xa0; <img src="1738659393_fourier-transform/1738659393_fourier-transform-36.png" width="58" height="36" alt="" />e <sup>-jω</sup><sup>t</sup> dt&#xa0;&#xa0;&#xa0;&#xa0; [as Π(t/T) = 1 for |t| ≤ T/2]
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; =&#xa0; [(e <sup>–jω</sup><sup>t</sup>)/-jω]<sub>-T/2</sub><sup>T/2</sup>
			</p>
			<p>
				<sup>&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; </sup>&#xa0;= [e <sup>–jωT</sup><sup>/2</sup> - e <sup>jωT</sup><sup>/2</sup>] / -jω
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; = [e <sup>jωT</sup><sup>/2</sup> - e <sup>-jωT</sup><sup>/2</sup>] / jω
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; = 2/ω . {[e <sup>jωT</sup><sup>/2</sup> - e <sup>-jωT</sup><sup>/2</sup>] / 2j}
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; = 2/ω . sin(ω(T/2))
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; = {sin(ω(T/2)) / (ω/2)}
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; = {sin(<img src="1738659393_fourier-transform/1738659393_fourier-transform-37.png" width="19" height="24" alt="" />ωT/2<img src="1738659393_fourier-transform/1738659393_fourier-transform-11.png" width="12" height="24" alt="" />)) / (<img src="1738659393_fourier-transform/1738659393_fourier-transform-37.png" width="19" height="24" alt="" />ω/2<img src="1738659393_fourier-transform/1738659393_fourier-transform-11.png" width="12" height="24" alt="" />))}
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; = {sin(<img src="1738659393_fourier-transform/1738659393_fourier-transform-37.png" width="19" height="24" alt="" />ωT/2<img src="1738659393_fourier-transform/1738659393_fourier-transform-11.png" width="12" height="24" alt="" />)) / (<img src="1738659393_fourier-transform/1738659393_fourier-transform-37.png" width="19" height="24" alt="" />ωT/2<img src="1738659393_fourier-transform/1738659393_fourier-transform-11.png" width="12" height="24" alt="" />))}.T
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; = T. sinc(ωT/2<img src="1738659393_fourier-transform/1738659393_fourier-transform-11.png" width="12" height="24" alt="" />)
			</p>
			<p>
				&#xa0;
			</p>
			<p>
				&#xa0;
			</p>
				<li>
					<h3> Fourier Transform of a unit triangle pulse</h3>
				</li>
			<p>
				<img src="1738659393_fourier-transform/1738659393_fourier-transform-38.png" width="285" height="201" alt="" />
			</p>
			<p>
				A unit triangle pulse is simply the convolution of a unit pulse function with itself.
			</p>
			<p>
				Here, Λ(t) = Π(t) * Π(t)&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; 
			</p>
			<p>
				<em>[Π(t) is a unit pulse function &amp; ‘*’ denotes convolution]</em>
			</p>
			<p>
				So, Λ(ω) = sinc(ω/2<img src="1738659393_fourier-transform/1738659393_fourier-transform-11.png" width="12" height="24" alt="" />) . sinc(ω/2<img src="1738659393_fourier-transform/1738659393_fourier-transform-39.png" width="19" height="24" alt="" /> = sinc<sup>2</sup>(ω/2<img src="1738659393_fourier-transform/1738659393_fourier-transform-39.png" width="19" height="24" alt="" />
			</p>
			<p>
				&#xa0;
			</p>
				<li>
					<h3> Fourier Transform of a Sawtooth function</h3>
				</li>
			<p>
				<img src="1738659393_fourier-transform/1738659393_fourier-transform-40.png" width="311" height="221" alt="" />
			</p>
			<p>
				s(t) = 0, for t &lt; 0 and t &gt; 1
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; = 1, for 0 ≤ t ≤ 1
			</p>
			<p>
				We can represent sawtooth as the integral of shifted unit pulse function (to give the ramp) and a negative impulse (delayed by one second) to give the discontinuity at the end of the ramp
			</p>
			<p>
				<img src="1738659393_fourier-transform/1738659393_fourier-transform-41.png" width="364" height="212" alt="" />
			</p>
			<p>
				&#xa0;
			</p>
			<p>
				s(t) = <img src="1738659393_fourier-transform/1738659393_fourier-transform-42.png" width="101" height="33" alt="" />dt - <img src="1738659393_fourier-transform/1738659393_fourier-transform-43.png" width="99" height="32" alt="" />dt =<img src="1738659393_fourier-transform/1738659393_fourier-transform-44.png" width="84" height="32" alt="" />
			</p>
			<p>
				y(t) = <img src="1738659393_fourier-transform/1738659393_fourier-transform-45.png" width="69" height="33" alt="" /> - <img src="1738659393_fourier-transform/1738659393_fourier-transform-46.png" width="67" height="24" alt="" />
			</p>
			<p>
				Now, we’ve to find the Fourier transform of y(t),
			</p>
			<p>
				Y(ω) = sinc(ω/2<img src="1738659393_fourier-transform/1738659393_fourier-transform-11.png" width="12" height="24" alt="" />)e<sup>-j</sup><sup>ω/2 </sup>- e<sup>-j</sup><sup>ω</sup>
			</p>
			<p>
				We can now apply integral property with Y(0) = 0, to find S(ω)
			</p>
			<p>
				S(ω) = F(<img src="1738659393_fourier-transform/1738659393_fourier-transform-44.png" width="84" height="32" alt="" />) = Y(ω)/jω - <img src="1738659393_fourier-transform/1738659393_fourier-transform-11.png" width="12" height="24" alt="" />Y(0)<img src="1738659393_fourier-transform/1738659393_fourier-transform-47.png" width="11" height="24" alt="" />(0) = Y(ω)/jω
			</p>
			<p>
				= {(sinc(ω/2<img src="1738659393_fourier-transform/1738659393_fourier-transform-11.png" width="12" height="24" alt="" />)e<sup>-j</sup><sup>ω/2 </sup>- e<sup>-j</sup><sup>ω</sup>) / jω}
			</p>
			<p>
				= {((sin(π . ω/2<img src="1738659393_fourier-transform/1738659393_fourier-transform-11.png" width="12" height="24" alt="" />) / (π . ω/2<img src="1738659393_fourier-transform/1738659393_fourier-transform-11.png" width="12" height="24" alt="" />))e<sup>-j</sup><sup>ω/2 </sup>- e<sup>-j</sup><sup>ω</sup>) / jω}
			</p>
			<p>
				=&#xa0; (((sin(π . ω/2<img src="1738659393_fourier-transform/1738659393_fourier-transform-11.png" width="12" height="24" alt="" />) / (π . ω/2<img src="1738659393_fourier-transform/1738659393_fourier-transform-11.png" width="12" height="24" alt="" />))e<sup>-j</sup><sup>ω/2</sup>) / jω) – (e<sup>-j</sup><sup>ω</sup> / jω)
			</p>
			<p>
				= (2(sin(ω/2)e<sup>-j</sup><sup>ω/2</sup>) / jω<sup>2</sup>) – (je<sup>-j</sup><sup>ω</sup> / j<sup>2</sup>ω)
			</p>
			<p>
				= (2((e<sup>j</sup><sup>ω/2</sup> - e<sup>-j</sup><sup>ω/2</sup>) / 2j)e<sup>-j</sup><sup>ω/2</sup>) / jω<sup>2</sup>) + (je<sup>-j</sup><sup>ω</sup> / ω)&#xa0;&#xa0;&#xa0;&#xa0; [as j<sup>2 </sup>= -1]
			</p>
			<p>
				= (((e<sup>j</sup><sup>ω/2</sup> - e<sup>-j</sup><sup>ω/2</sup>)e<sup>-j</sup><sup>ω/2</sup>) / j<sup>2</sup>ω<sup>2</sup>) + (je<sup>-j</sup><sup>ω</sup> / ω)
			</p>
			<p>
				= (((e<sup>-j</sup><sup>ω/2 </sup>- e<sup>j</sup><sup>ω/2</sup>)e<sup>-j</sup><sup>ω/2</sup>) / ω<sup>2</sup>) + (je<sup>-j</sup><sup>ω</sup> / ω)
			</p>
			<p>
				= (((e<sup>-j</sup><sup>ω/2 </sup>- e<sup>j</sup><sup>ω/2</sup>)e<sup>-j</sup><sup>ω/2</sup>) / ω<sup>2</sup>) + (je<sup>-j</sup><sup>ω</sup> / ω)
			</p>
			<p>
				= ((((e<sup>-j</sup><sup>ω/2 </sup>- e<sup>j</sup><sup>ω/2</sup>)e<sup>-j</sup><sup>ω/2</sup>) + jωe<sup>-j</sup><sup>ω</sup>) / ω<sup>2</sup>)
			</p>
			<p>
				= ((e<sup>-j</sup><sup>ω </sup>- 1 + jωe<sup>-j</sup><sup>ω</sup>) / ω<sup>2</sup>)
			</p>
			<p>
				= ((e<sup>-j</sup><sup>ω</sup>(1+jω)<sup> </sup>- 1) / ω<sup>2</sup>)
			</p>
			<p>
				&#xa0;
			</p>
			<p>
				<strong>&#xa0;</strong>
			</p>
				<li>
					<h2> Algorithms</h2>
				</li>
			<h3>For DFT &amp; FFT</h3>
			<p>
				Look at the aforementioned formula for DFT. The term <strong><em>W</em></strong><em><sup>k</sup></em><strong><em><sub>N</sub></em></strong><em><sub>&#xa0; </sub></em><em>(</em>= exp(-j(2<img src="1738659393_fourier-transform/1738659393_fourier-transform-6.png" width="11" height="31" alt="" /> .k) ) can be represented as follows
			</p>
			<p>
				<img src="1738659393_fourier-transform/1738659393_fourier-transform-48.png" width="545" height="149" alt="" />
			</p>
			<p>
				&#xa0;
			</p>
			<p>
				In the above figure the values for N = 2, 4, and 8 are shown in the complex plain. Where ‘N’ denotes N point DFT.
			</p>
			<p>
				&#xa0;
			</p>
			<p>
				For example,
			</p>
<h3>For a 2 point DFT</h3>
			<p>
				<strong>W</strong><strong><sub>2</sub></strong><strong> = e</strong><strong><sup>-2jπ/N</sup></strong><strong> = e</strong><strong><sup>-2jπ/2</sup></strong><strong> = e</strong><strong><sup>-jπ </sup></strong><strong>= -1</strong>
			</p>
			<p>
				Now, discrete Fourier transform for complex numbers a<sub>1</sub> and a<sub>2</sub> is
			</p>
			<p>
				<strong>A</strong><strong><sub>K</sub></strong><sub> </sub>= <img src="1738659393_fourier-transform/1738659393_fourier-transform-49.png" width="54" height="24" alt="" /><sub>n</sub> <em>W</em><em><sub>2</sub></em><em><sup>kn</sup></em>
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; = <img src="1738659393_fourier-transform/1738659393_fourier-transform-49.png" width="54" height="24" alt="" /><sub>n</sub> <em>(-1)</em><em><sup>kn</sup></em>
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; = a<sub>0</sub> <em>(-1)</em><em><sup>k</sup></em><em><sup>&#xa0; </sup></em><em><sup>.0</sup></em><em><sup>&#xa0; </sup></em><em>+ </em>a<sub>1</sub> <em>(-1)</em><em><sup>k</sup></em><em><sup>&#xa0; </sup></em><em><sup>.1</sup></em>
			</p>
			<p>
				As <strong>K = </strong>0 and 1 (for 2 point DFT)
			</p>
			<p>
				So, <strong>A</strong><strong><sub>0 </sub></strong>= a<sub>0</sub><em><sup>&#xa0; </sup></em><em>+ </em>a<sub>1</sub>
			</p>
			<p>
				And <strong>A</strong><strong><sub>1 </sub></strong><strong>= </strong>a<sub>0</sub><em><sup>&#xa0; </sup></em><em>-</em><em>&#xa0; </em>a<sub>1</sub>
			</p>
			<p>
				&#xa0;
			</p>
			<h3>Similarly for a 4-point DFT</h3>
			<p>
				<strong>W</strong><strong><sub>4</sub></strong><strong> = e</strong><strong><sup>-2jπ/4</sup></strong><strong> = e</strong><strong><sup>-2jπ/4</sup></strong><strong> = e</strong><strong><sup>-jπ/2 </sup></strong><strong>= -j</strong>
			</p>
			<p>
				Now, discrete Fourier transform for complex numbers a<sub>1</sub>, a<sub>2</sub>, a<sub>3</sub>, and a<sub>4</sub> is
			</p>
			<p>
				<strong>A</strong><strong><sub>K</sub></strong><sub> </sub>= <img src="1738659393_fourier-transform/1738659393_fourier-transform-50.png" width="54" height="25" alt="" /><sub>n</sub> <em>W</em><em><sub>4</sub></em><em><sup>kn</sup></em>
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0; = <img src="1738659393_fourier-transform/1738659393_fourier-transform-50.png" width="54" height="25" alt="" /><sub>n</sub> <em>(-j)</em><em><sup>kn</sup></em>
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0; = a<sub>0</sub> <em>(-j)</em><em><sup>k</sup></em><em><sup>&#xa0; </sup></em><em><sup>.0</sup></em><em><sup>&#xa0; </sup></em><em>+ </em>a<sub>1</sub> <em>(-j)</em><em><sup>k</sup></em><em><sup>&#xa0; </sup></em><em><sup>.1</sup></em><em> + </em>a<sub>2</sub> <em>(-j)</em><em><sup>k</sup></em><em><sup>&#xa0; </sup></em><em><sup>.2</sup></em><em> + </em>a<sub>3</sub> <em>(-j)</em><em><sup>k</sup></em><em><sup>&#xa0; </sup></em><em><sup>.3</sup></em>
			</p>
			<p>
				So, <strong>A</strong><strong><sub>0 </sub></strong>= a<sub>0</sub><em><sup>&#xa0; </sup></em><em>+ </em>a<sub>1 </sub>+ a<sub>2</sub><em><sup>&#xa0; </sup></em><em>+ </em>a<sub>3</sub>
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; <strong>A</strong><strong><sub>1 </sub></strong><strong>= </strong>a<sub>0</sub><em><sup>&#xa0; </sup></em><em>- j</em>a<sub>1 </sub>- a<sub>2</sub><em><sup>&#xa0; </sup></em><em>+ j</em>a<sub>3</sub>
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; <strong>A</strong><strong><sub>2 </sub></strong><strong>= </strong>a<sub>0</sub><em><sup>&#xa0; </sup></em><em>- </em>a<sub>1 </sub>+ a<sub>2</sub><em><sup>&#xa0; </sup></em><em>- </em>a<sub>3</sub>
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; <strong>A</strong><strong><sub>3 </sub></strong><strong>= </strong>a<sub>0</sub><em><sup>&#xa0; </sup></em><em>+ j</em>a<sub>1 </sub>- a<sub>2</sub><em><sup>&#xa0; </sup></em><em>- j</em>a<sub>3</sub>
			</p>
			<p>
				&#xa0;
			</p>
			<p>
				To compute <strong>A</strong> quickly, we can pre-compute common sub-expressions:
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; <strong>A</strong><strong><sub>0 </sub></strong>= (a<sub>0</sub><em><sup> </sup></em><em>+ </em>a<sub>2</sub>)<sub> </sub>+ (a<sub>1</sub><em><sup>&#xa0; </sup></em><em>+ </em>a<sub>3</sub>)
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; <strong>A</strong><strong><sub>1 </sub></strong><strong>=</strong><strong>&#xa0; </strong><strong>(</strong>a<sub>0</sub><em><sup> </sup></em>- a<sub>2</sub>)<sub> </sub><em>– j(</em>a<sub>1</sub><em><sup>&#xa0; </sup></em><em>- </em>a<sub>3</sub>)
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; <strong>A</strong><strong><sub>2 </sub></strong><strong>= (</strong>a<sub>0</sub><em><sup>&#xa0; </sup></em><em>+ </em>a<sub>2</sub>)<sub> </sub>- (a<sub>1</sub><em><sup>&#xa0; </sup></em><em>+ </em>a<sub>3</sub>)
			</p>
			<p>
				&#xa0;&#xa0;&#xa0;&#xa0;&#xa0; <strong>A</strong><strong><sub>3 </sub></strong><strong>= (</strong>a<sub>0</sub><em><sup>&#xa0; </sup></em>- a<sub>2</sub>)<em><sup>&#xa0; </sup></em><em>+ j(</em>a<sub>1 </sub>- a<sub>3</sub>)
			</p>
			<p>
				&#xa0;
			</p>
			<p>
				Then we can diagram the 4-point like so,
			</p>
			<p>
				<img src="1738659393_fourier-transform/1738659393_fourier-transform-51.png" width="406" height="226" alt="" />
			</p>
			<p>
				Fig: Three stages in the computation of an N=8-point DFT
			</p>
			<p>
				&#xa0;
			</p>
			<p>
				<img src="1738659393_fourier-transform/1738659393_fourier-transform-52.png" width="520" height="240" alt="" />
			</p>
			<p>
				Fig: Three stages in the computation of an N=8-point DFT
			</p>
			<p>
				&#xa0;
			</p>
		<h3>Matrix Relations in DFT</h3>
			<p>
				The DFT samples defined by
			</p>
			<p>
				<img src="1738659393_fourier-transform/1738659393_fourier-transform-53.png" width="231" height="49" alt="" />
			</p>
			<p>
				<strong>&#xa0;</strong>
			</p>
			<p>
				<em>W</em><em><sub>N</sub></em><em><sup>kn </sup></em>&#xa0;can be expanded as&#xa0; NXN <strong>DFT matrix</strong>
			</p>
			<p>
				<img src="1738659393_fourier-transform/1738659393_fourier-transform-54.png" width="288" height="125" alt="" />
			</p>
			<p>
				In the matrix the elements in first row and first column all are <em>W</em><em><sub>N</sub></em><em><sup>.k.0</sup></em><em> or W</em><em><sub>N</sub></em><em><sup>.0</sup></em><em>=1. </em>In the third row powers are multiplied by 2 and in the fourth row powers are multiplied by 3 and so on.
			</p>
			<p>
				So,
			</p>
			<p>
				<img src="1738659393_fourier-transform/1738659393_fourier-transform-55.png" width="500" height="145" alt="" />
			</p>
			<p>
				&#xa0;
			</p>
			<p>
				Oppositely, to find <strong>inverse DFT</strong> we replace the ‘j’ with ‘-j’ in the matrix or we take complex conjugates of the matrix elements.
			</p>
			<p>
				So, 
			</p>
			<p>
				<img src="1738659393_fourier-transform/1738659393_fourier-transform-56.png" width="602" height="184" alt="" />
			</p>
			<p>
				The effective determinant of above is 1/4
			</p>
			<p>
				<strong>&#xa0;</strong>
			</p>
<h3>For a 8-point FFT</h3>
			<p>
				The FFT is a fast algorithm for computing the DFT. If we take the 2-point DFT and 4-point DFT and generalize them to 8-point, 16-point, ..., 2<sup>r</sup>-point, we get the FFT algorithm.
			</p>
			<p>
				&#xa0;
			</p>
<h4>>N=8-point radix-4 DIT-FFT</h4>
			<p>
				<img src="1738659393_fourier-transform/1738659393_fourier-transform-57.png" width="521" height="313" alt="" />
			</p>
			<p>
				Where, -W<sup>4 </sup>= W<sup>0</sup>=1; -W<sup>5</sup>= W<sup>1</sup><sup>&#xa0; </sup>= a&#xa0; = (1-j)/2;&#xa0; -W<sup>2 </sup>= W<sup>6</sup>=j and -W<sup>3 </sup>= W<sup>7 </sup>= b&#xa0; =&#xa0; (1+j)/2
			</p>
			<p>
				The above diagram is same as illustrated in section ‘Fast Fourier Transform’ under ‘Basics of Fourier Transform’
			</p>
			<p>
				<strong>&#xa0;</strong>
			</p>
<h4>N=8-point radix-2 DIT-FFT</h4>
			<p>
				&#xa0;
			</p>
			<p>
				<img src="1738659393_fourier-transform/1738659393_fourier-transform-58.png" width="602" height="307" alt="" />
			</p>
			<p>
				<strong>** </strong><em>W</em><em><sup>x</sup></em><em> = W</em><em><sub>8</sub></em><em><sup>x</sup></em>
			</p>
			<p>
				<strong>&#xa0;</strong>
			</p>
<h2>
			Applications 
</h2>
			<p>
				Fourier transform is used in circuit analysis, signal analysis, cell phones, image analysis, signal processing, and LTI systems. The Fourier transform is most probably the best tool to find the frequency in an entire field. This makes it a useful tool for LTI systems and signal processing. Partial differential equations reduce to ordinary differential equations in Fourier Transform.
			</p>
</body>
</html>
