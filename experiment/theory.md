1.  **Basics of Fourier Transform**

Fourier transform is a process to convert a spatial domain signal (i.e.,
time domain signal) into a frequency domain signal. Oppositely, the
inverse Fourier transform is a process to convert the frequency domain
signal to the primary time domain signal.

**Fourier transform**

The Fourier transform of a time-domain signal is defined as follows

X(ω) = $\int_{- \infty}^{\infty}{x(t).\ exp( - j}$ωt) dt

*\*\*x(t) denotes the signal in the time domain,* $X(\omega)$ *denotes
the signal in the frequency domain and* $\omega$ is the angular
frequency.

**Inverse Fourier transform**

x(t) =
$\frac{1}{2\mathbf{\pi}}\int_{- \infty}^{\infty}{X(\omega)\ .\ exp(j}$ωt)
dt

**Discrete Fourier Transform (DFT)**

For digital systems, the Fourier transform is realized by

For complex numbers $x_0, x_1, x_2, \dots, x_{n-1}$

$X[k] = \sum_{n = 0}^{N - 1} x[n] \cdot W_N^{kn}$, where \( k = 1, 2, 3, \dots, N - 1 \)

Where \( W_N \) is the \( n^{\text{th}} \) root of unity given by:

$W_N = \exp\left(-j 2 \pi \frac{k}{N}\right)$


*\*\*DFT Algorithms are at the end of this article*

**Fast Fourier Transform (FFT)**

The basic idea of a fast Fourier transform is to break up a transform of
length N into two transforms of length N/2.

For complex numbers x\[n\] where, n = 1, 2, 3, ..., n-1

$X[k] = \sum_{n = 0}^{N - 1} x[n] \cdot W_N^{kn}$

$= \sum_{r = 0}^{\left(\frac{N}{2}\right) - 1} x[2r] e^{-j 2 \pi k \cdot 2r / N} + \sum_{r = 0}^{\left(\frac{N}{2}\right) - 1} x[2r + 1] e^{-j 2 \pi k \cdot (2r + 1) / N}$


*\*\*In the above transform of length N is broken into two transforms of
length N/2 and on the other hand, they pick up even and odd samples of
x\[n\] separately*

$\sum_{r = 0}^{\left(\frac{N}{2}\right) - 1} x[2r] e^{-j 2 \pi k \cdot 2r / N} + e^{-j 2 \pi k / N} \sum_{r = 0}^{\left(\frac{N}{2}\right) - 1} x[2r + 1] e^{-j 2 \pi k \cdot 2r / N}$

$= \sum_{r = 0}^{\left(\frac{N}{2}\right) - 1} x[2r] e^{-j 2 \pi k r / (N/2)} + e^{-j 2 \pi k / N} \sum_{r = 0}^{\left(\frac{N}{2}\right) - 1} x[2r + 1] e^{-j 2 \pi k r / (N/2)}$


![](./media/media/image1.png)

In the above diagram {**X\[0\], X\[1\], X\[2\], X\[3\], X\[4\], X\[5\],
X\[6\], X\[7\]**} is the Fourier transform of {x\[0\], x\[1\], x\[2\],
x\[3\], x\[4\], x\[5\], x\[6\], x\[7\]}

*\*\*FFT algorithms are at the end of this article*

2. **Advantages of FFT over DFT**

To compute the DFT of an N-point sequence, it takes $O(N^2)$ multiplies and adds. The FFT algorithm computes the DFT using $O(N \log N)$ multiplies and adds.

The Fast Fourier Transform (FFT) is a discrete Fourier transform algorithm which reduces the number of computations needed for $N$ points from $2N^2$ to $2N \log_2 N$.

3. **Properties of Fourier Transform**

1. **Linearity**

The Fourier Transform satisfies linearity & the principle of superposition.

Consider two functions $x_1(t)$ and $x_2(t)$.

If $F(x_1(t)) = X_1(\omega)$, $F(x_2(t)) = X_2(\omega)$,

Then $F[a_1 x_1(t) + a_2 x_2(t)] = a_1 X_1(\omega) + a_2 X_2(\omega)$.

2. **Scaling**

$F(x(t)) = X(\omega)$

If 'a' is a real constant, then

$F(x(at)) = \frac{1}{|a|} X(\omega)$.

3. **Symmetry**

When $x(t)$ is real and even, then $X(\omega) = X^*(-\omega)$.

When $x(t)$ is real and odd, then $X(\omega) = X(-\omega)$.

4. **Convolution**

The Fourier transform makes the convolution of 2 signals into the product of their Fourier transforms. There are two types of convolutions: one for the time domain and one for the frequency domain.

a. **Time domain convolution**

If $F(x_1(t)) = X_1(\omega)$, $F(x_2(t)) = X_2(\omega)$,

Then $F(x_1(t) * x_2(t)) = X_1(\omega) \cdot X_2(\omega)$, where $*$ denotes the convolution operator.

b. **Frequency domain convolution**

$F(x_1(t) \cdot x_2(t)) = \frac{1}{2\pi} X_1(\omega) * X_2(\omega)$, where $*$ denotes the convolution operator.

5. **Shifting Property**

$F(x(t - t_0)) = e^{-j \omega t_0} X(\omega)$.

As a consequence, transforms leave the Fourier spectrum $|X(\omega)|^2$ unchanged.

6. **Duality**

$F(x(t)) = X(t) = 2\pi x(-\omega)$.

7. **Differentiation**

$F\left(\frac{dx(t)}{dt}\right) = j\omega X(\omega)$.

8. **Integration**

$F\left(\int_{-\infty}^{\infty} x(t) dt\right) = \frac{X(\omega)}{j\omega}$.

When a function (i.e., $x(t)$) is not an energy function, the Fourier transform of $\left[\int_{-\infty}^{\infty} x(t) dt\right]$ includes an impulse function.

$F\left(\int_{-\infty}^{\infty} x(t) dt\right) = \frac{X(\omega)}{j\omega} + \pi X(0) \delta(\omega)$.


9.  **Modulation Property**

F{x(t)*cosat*} = ½ {X(ω + a) + X(ω - a)}

F{x(t)*sinat*} = ½ {X(ω + a) - X(ω - a)}

10. If the Fourier transform of f(x) is F(k), then f^\*^(x) \<=\>
    F^\*^(-k)

As a consequence Fourier transform of a real function must satisfy the
symmetry relation.

F(k) = F^\*^(-k), meaning that the Fourier transform is symmetric about
the origin in k-space. \|F(k)\|^2^ = \|F(-k)\|^2^

11. **Parseval's theorem**

Energy =
$\int_{\mathbf{- \infty}}^{\mathbf{\infty}}\mathbf{|x}$***(t)\|^2^dt =
1/2***$\mathbf{\pi}$
$\int_{\mathbf{- \infty}}^{\mathbf{\infty}}\mathbf{|X}$***(*ω*)\|^2^d*ω**

The total energy in the time domain signal, x(t) \[i.e., the left
integral\] can be easily calculated from the frequency domain signal,
*X(ω)* \[i.e., from the right integral\]

12. **Time reversal**

F(x(-t)) = X(-ω)

4.  **Fourier Transform of some common signals**

    1.  **Fourier Transform of a delta function**

![](./media/media/image2.png)

If $x(t) = \delta(t)$, then the Fourier transform is

$X(\omega) = \int_{- \infty}^{\infty} x(t) e^{-j \omega t} dt$

$= \int_{- \infty}^{\infty} \delta(t) e^{-j \omega t} dt$

$= \int_{- \infty}^{\infty} 1 \cdot e^{-j \omega 0} dt$

$= 1$

Thus, the Fourier transform of a delta impulse is a constant equal to 1, independent of frequency. Remember that this derivation uses the shifting property of the impulse to eliminate the integral.


2.  **Fourier transform of a unit step function**

![](./media/media/image3.png)

γ (t) = 0 for t\<0

= 1 for t ≥1

We know that a unit-step function is an integration of a delta function.
So for a unit step function,

γ (t) = $\int_{- \infty}^{\infty}\delta$*(t) dt*

So, X(ω) = $\frac{1}{j\omega}$ F($\delta(t)$) +
$\mathbf{\pi}$F($\delta(0)$)$\delta(\omega)$

*\[See the property of integration above\]*

= $\frac{1}{j\omega}$ + $\mathbf{\pi}\delta(\omega)$ \[as
F($\delta(t)$)= F($\delta(0)$)=1\]

When a function (i.e., x(t)) is not an energy function and hence the
Fourier transform of $\lbrack\int_{- \infty}^{\infty}x$*(t) dt*\]
includes an impulse function.

3.  **Fourier Transform of a unit pulse function**

A pulse function can be represented as,

x(t)=Π(t) = γ (t + ½) - γ(t - ½)

![](./media/media/image4.PNG)

For a function $\text{rect}(t) = \Pi(t) = 1$ for $|t| \leq \frac{1}{2}$

$= 0$ otherwise

Given that

$x(t) = \Pi(t)$

Hence from the definition of the Fourier transform we have

$F (\Pi(t)) = X(\omega) = \int_{- \infty}^{\infty}{x(t)} e^{-j\omega t} dt$

$= \int_{- 1/2}^{1/2}{1.} e^{-j\omega t} dt \quad \text{(as } \Pi(t) = 1 \text{ for } |t| \leq \frac{1}{2} \text{)}$

$= \frac{e^{-j\omega t}}{-j\omega} \Big|_{-1/2}^{1/2}$

$= \frac{e^{-j\omega/2} - e^{j\omega/2}}{-j\omega}$

$= \frac{e^{j\omega/2} - e^{-j\omega/2}}{j\omega}$

$= \frac{2}{\omega} \cdot \frac{e^{j\omega/2} - e^{-j\omega/2}}{2j}$

$= \frac{2}{\omega} \cdot \sin\left(\frac{\omega}{2}\right)$

$= \frac{\sin\left(\frac{\omega}{2}\right)}{\frac{\omega}{2}}$

$= \frac{\sin\left(\pi \frac{\omega}{2\pi}\right)}{\pi \frac{\omega}{2\pi}}$

$= \text{sinc}\left(\frac{\omega}{2\pi}\right)$

For the above case, the rectangular function has a pulse width value of 1 over the interval of $[-\frac{1}{2}, \frac{1}{2}]$; 0 otherwise.

Now we'll discuss a rectangular pulse that has a width of $T$.

Then, $\text{rect}(t/T) = \Pi(t/T) = 1$ for $|t| \leq T/2$

$= 0$ otherwise

Given that

$x(t/T) = \Pi(t/T)$

Hence from the definition of the Fourier transform we have

$F (\Pi(t/T)) = \int_{- \infty}^{\infty}{x(t/T)} e^{-j\omega t} dt$

$= \int_{- T/2}^{T/2}{1.} e^{-j\omega t} dt \quad \text{(as } \Pi(t/T) = 1 \text{ for } |t| \leq T/2 \text{)}$

$= \frac{e^{-j\omega t}}{-j\omega} \Big|_{-T/2}^{T/2}$

$= \frac{e^{-j\omega T/2} - e^{j\omega T/2}}{-j\omega}$

$= \frac{e^{j\omega T/2} - e^{-j\omega T/2}}{j\omega}$

$= \frac{2}{\omega} \cdot \frac{e^{j\omega T/2} - e^{-j\omega T/2}}{2j}$

$= \frac{2}{\omega} \cdot \sin\left(\frac{\omega T}{2}\right)$

$= \frac{\sin\left(\frac{\omega T}{2}\right)}{\frac{\omega}{2}}$

$= \frac{\sin\left(\pi \frac{\omega T}{2\pi}\right)}{\pi \frac{\omega}{2\pi}}$

$= \frac{\sin\left(\pi \frac{\omega T}{2\pi}\right)}{\pi \frac{\omega T}{2\pi}} \cdot T$

$= T \cdot \text{sinc}\left(\frac{\omega T}{2\pi}\right)$


4.  **Fourier Transform of a unit triangle pulse**

![](./media/media/image5.png)

A unit triangle pulse is simply the convolution of a unit pulse function
with itself.

Here, Λ(t) = Π(t) \* Π(t)

*\[Π(t) is a unit pulse function & '\*' denotes convolution\]*

$\Lambda(\omega) = \text{sinc}\left(\frac{\omega}{2\pi}\right) \cdot \text{sinc}^2\left(\frac{\omega}{2\pi}\right)$


5.  **Fourier Transform of a Sawtooth function**

![](./media/media/image6.png)

s(t) = 0, for t \< 0 and t \> 1

= 1, for 0 ≤ t ≤ 1

We can represent sawtooth as the integral of shifted unit pulse function
(to give the ramp) and a negative impulse (delayed by one second) to
give the discontinuity at the end of the ramp

![](./media/media/image7.png)

$$
s(t) = \int_{- \infty}^{t} \Pi(t - \frac{1}{2}) \, dt - \int_{- \infty}^{t} \delta(t - 1) \, dt = \int_{- \infty}^{t} y(t) \, dt
$$

$$
y(t) = \Pi(t - \frac{1}{2}) - \delta(t - 1)
$$

Now, we need to find the Fourier transform of \( y(t) \):

$$
Y(\omega) = \text{sinc}\left(\frac{\omega}{2\pi}\right) e^{-j\omega/2} - e^{-j\omega}
$$

We can now apply the integral property with \( Y(0) = 0 \) to find \( S(\omega) \):

$$
S(\omega) = F\left(\int_{- \infty}^{t} y(t) \, dt\right) = \frac{Y(\omega)}{j\omega} - \pi Y(0) \delta(0)
= \frac{Y(\omega)}{j\omega}
$$

$$
= \frac{\text{sinc}\left(\frac{\omega}{2\pi}\right) e^{-j\omega/2} - e^{-j\omega}}{j\omega}
$$

$$
= \frac{\left(\frac{\sin(\pi \cdot \frac{\omega}{2\pi})}{\pi \cdot \frac{\omega}{2\pi}}\right) e^{-j\omega/2} - e^{-j\omega}}{j\omega}
$$

$$
= \frac{\left(\frac{\sin(\pi \cdot \frac{\omega}{2\pi})}{\pi \cdot \frac{\omega}{2\pi}}\right) e^{-j\omega/2}}{j\omega} - \frac{e^{-j\omega}}{j\omega}
$$

$$
= \frac{2 \left(\frac{\sin(\omega/2)}{j\omega^2}\right) e^{-j\omega/2}}{j\omega} - \frac{j e^{-j\omega}}{\omega}
$$

$$
= \frac{2\left(\frac{e^{j\omega/2} - e^{-j\omega/2}}{2j}\right) e^{-j\omega/2}}{j\omega^2} + \frac{j e^{-j\omega}}{\omega}
$$

$$
= \frac{\left(e^{j\omega/2} - e^{-j\omega/2}\right) e^{-j\omega/2}}{j^2 \omega^2} + \frac{j e^{-j\omega}}{\omega}
$$

$$
= \frac{\left(e^{-j\omega/2} - e^{j\omega/2}\right) e^{-j\omega/2}}{\omega^2} + \frac{j e^{-j\omega}}{\omega}
$$

$$
= \frac{\left(e^{-j\omega/2} - e^{j\omega/2}\right) e^{-j\omega/2}}{\omega^2} + \frac{j e^{-j\omega}}{\omega}
$$

$$
= \frac{\left(e^{-j\omega/2} - e^{j\omega/2}\right) e^{-j\omega/2} + j\omega e^{-j\omega}}{\omega^2}
$$

$$
= \frac{e^{-j\omega} (1 + j\omega) - 1}{\omega^2}
$$

### For DFT & FFT

Look at the aforementioned formula for DFT. The term $W_k^N \left( = \exp\left(-j\left(2\frac{\pi}{N}\right) k\right) \right)$ can be represented as follows.


![](./media/media/image8.png)

In the above figure, the values for $N = 2, 4, \text{ and } 8$ are shown in the complex plane. Where 'N' denotes the N-point DFT.

For example,

### For a 2-point DFT:
$$
W_2 = e^{-2j\pi / N} = e^{-2j\pi / 2} = e^{-j\pi} = -1
$$
Now, the discrete Fourier transform for complex numbers $a_1$ and $a_2$ is:
$$
A_K = \sum_{n=0}^{1} a_n W_2^{kn}
= \sum_{n=0}^{1} a_n (-1)^{kn}
= a_0 (-1)^{k \cdot 0} + a_1 (-1)^{k \cdot 1}
$$
As $K = 0$ and $1$ (for a 2-point DFT), we get:
$$
A_0 = a_0 + a_1
$$
and
$$
A_1 = a_0 - a_1
$$

### Similarly for a 4-point DFT:
$$
W_4 = e^{-2j\pi / 4} = e^{-j\pi / 2} = -j
$$
Now, the discrete Fourier transform for complex numbers $a_1, a_2, a_3, \text{ and } a_4$ is:
$$
A_K = \sum_{n=0}^{3} a_n W_4^{kn}
= \sum_{n=0}^{3} a_n (-j)^{kn}
= a_0 (-j)^{k \cdot 0} + a_1 (-j)^{k \cdot 1} + a_2 (-j)^{k \cdot 2} + a_3 (-j)^{k \cdot 3}
$$
So, we get:
$$
A_0 = a_0 + a_1 + a_2 + a_3
$$
$$
A_1 = a_0 - j a_1 - a_2 + j a_3
$$
$$
A_2 = a_0 - a_1 - a_2 + a_3
$$
$$
A_3 = a_0 + j a_1 - a_2 - j a_3
$$

To compute $A$ quickly, we can pre-compute common sub-expressions:
$$
A_0 = (a_0 + a_2) + (a_1 + a_3)
$$
$$
A_1 = (a_0 - a_2) - j(a_1 - a_3)
$$
$$
A_2 = (a_0 + a_2) - (a_1 + a_3)
$$
$$
A_3 = (a_0 - a_2) + j(a_1 - a_3)
$$

Then we can diagram the 4-point DFT like so:


![](./media/media/image9.png)

Fig: Three stages in the computation of an N=8-point DFT

![](./media/media/image10.png)

Fig: Three stages in the computation of an N=8-point DFT

**Matrix Relations in DFT**

The DFT samples defined by

![](./media/media/image11.wmf)

$W_N^{kn}$ can be expanded as $N \times N$
**DFT matrix**

![](./media/media/image12.wmf)

In the matrix, the elements in the first row and first column are all $W_N^{.k.0}$ or $W_N^{.0} = 1$. In the third row, the powers are multiplied by 2, and in the fourth row, the powers are multiplied by 3, and so on.


So,

![](./media/media/image13.png)

Oppositely, to find **inverse DFT** we replace the 'j' with '-j' in the
matrix or we take complex conjugates of the matrix elements.

So,

![](./media/media/image14.PNG)

The effective determinant of above is 1/4

**For a 8-point FFT**

The FFT is a fast algorithm for computing the DFT. If we take the
2-point DFT and 4-point DFT and generalize them to 8-point, 16-point,
\..., 2^r^-point, we get the FFT algorithm.

**N=8-point radix-4 DIT-FFT**

![](./media/media/image15.png)

Where, $W^4 = W_8^0 = 1$; $W^5 = W_8^1 = a = \frac{1 - j}{\sqrt{2}}$; $W^2 = W_8^6 = j$; and $W^3 = W_8^7 = b = \frac{1 + j}{\sqrt{2}}$


The above diagram is same as illustrated in section 'Fast Fourier
Transform' under 'Basics of Fourier Transform'

**N=8-point radix-2 DIT-FFT**

![](./media/media/image16.png)

**\*\*** $W^x = W_8^x$

6.  **Applications**

Fourier transform is used in circuit analysis, signal analysis, cell
phones, image analysis, signal processing, and LTI systems. The Fourier
transform is most probably the best tool to find the frequency in an
entire field. This makes it a useful tool for LTI systems and signal
processing. Partial differential equations reduce to ordinary
differential equations in Fourier Transform.
