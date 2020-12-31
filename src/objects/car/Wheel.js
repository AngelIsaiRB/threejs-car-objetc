import { Color, CylinderBufferGeometry, MathUtils, Mesh, MeshStandardMaterial } from "three";

class Wheel extends Mesh{
    constructor(){
        super();
        this.material= new MeshStandardMaterial({
            color: new  Color("dimgray").convertSRGBToLinear(),
            flatShading:true,
            
        });        
        this.geometry= new CylinderBufferGeometry(.5,.5,.5,16);
        this.rotateZ(MathUtils.degToRad(90));

    }
} 

export default Wheel;