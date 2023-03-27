import { Clone, useGLTF } from '@react-three/drei'

export default function Model()
{
    const model = useGLTF('./low_poly_tree_trunk.glb')
    
    return <>
        <Clone object={ model.scene } scale={ 0.8 } position={ [ 2, -1, -4 ] } />
        <Clone object={ model.scene } scale={ 1.15 } position={ [ 2, -1, 2 ] } />
        <Clone object={ model.scene } scale={ 1.55 } position={ [ -2, -1, 0 ] } />
        <Clone object={ model.scene } scale={ 0.4 } position={ [ -3, -1, 3 ] } />
    </>
}

useGLTF.preload('./low_poly_tree_trunk.glb')