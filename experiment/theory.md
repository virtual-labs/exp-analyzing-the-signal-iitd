### Theory

The slope deflection method is a classical displacement-based structural analysis technique used to determine the displacements and member end forces for a beam/ frame subjected to external loads. The method is computationally prefered over force method for structures for which DSI > DKI, where DSI is degree of static indeterminacy and DKI is the degree of kinematic indeterminacy.<br>

<strong>1. Assumptions:</strong> <br><br>
•	The beam is made of a linearly – elastic material (Hooke’s law is valid).<br>
•	The beam undergoes small deformations, and its geometry remains unchanged. <br>
•	The cross-sections of the beam remain plane and perpendicular to the longitudinal axis. <br>
•	The loads applied the beam are static (do not vary with time). <br><br>

<strong>2. Structural Idealization: </strong><br><br>
•	The beam is discretized into individual members (segments) between consecutive supports and points of loading. <br>
•	Each member is onsides as a simple beam with three degrees of freedom: two rotations(Ɵ<sub>A</sub> and Ɵ<sub>B</sub>) and relative displacement (δ = δ<sub>A</sub> - δ<sub>B</sub>). <br>

<strong>3. Sign Conventions</strong><br>
•	Anticlockwise rotations and moments are considered as positive(+ve).<br>
•	Relative displacement δ<sub>A</sub> is considered positive, if it leads to anticlockwise rigid body rotations i.e δ<sub>A</sub> > δ<sub>B</sub><br><br>

<strong>4. Determination of Fixed Moments (FEM):</strong><br><br>
•	The first step is to determine the fixed end moments for each member, which represent the moments that would develop at the ends of the member if it were fully fixed (rotationally and translationally) and subjected to the applied loads. <br>
•	For each member, the fixed end moments are computed using the known loads and the geometry of the beam, taking into account the support conditions at the ends, using well-known standard formulas. <br>

<br>
<div align="center"><img src="images/F1.png"></div>
<br>

<strong>The next step is the formation of slope-deflection equations:</strong> <br>
•	The slope-deflection equations relates the rotation (Ɵ) and the relative vertical displacement (δ) with the bending moments at the ends.<br>
•	These equations are derived based on the relationship between bending moment, rotations, and the material properties of the beam (Elastic Modulus and Moment of Inertia), as follows. <br>
<br>
<div align="center"><img src="images/f2.png"></div>
<br>
where: M<sup>F</sup><sub>AB</sub> and M<sup>F</sup><sub>BA</sub> = Fixed ended moments, Ɵ<sub>A</sub> and Ɵ<sub>B</sub> = Beam end rotations, δ<sub>AB</sub> = δ<sub>B</sub> - δ<sub>A</sub> = Relative vertical displacement between end A and B.<br>
•	Ɵ<sub>A</sub> and Ɵ<sub>B</sub> - anticlockwise (+ve).<br>
•	δ<sub>AB</sub> - Considered positive if member rotates anticlockwise as a whole.<br><br>



<strong>5. Application of equiliberium Equations:</strong><br><br>
•	Moment equilibrium are applied to form equations, whose solution leads to obtaining the unknown displacements. For example at joint B, (M<sub>BA</sub> + M<sub>BC</sub> = M<sub>B</sub> = 0) . After displacements and rotation are obtained, the members and moments obtained using the slope deflection equations (1 & 2).<br>

<strong>6. Verification of Results:</strong><br><br>
•	The computed bending moments and rotations should satisfy the equilibrium conditions at each joint and for the entire structure. 
<br>