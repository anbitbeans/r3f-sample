import { Physics, Debug, CuboidCollider, RigidBody } from '@react-three/rapier'
import Lights from './Lights.jsx'
import Player from './Player.jsx'
import Effects from './Effects.jsx'
import { useRef } from 'react'
import Fox from './Fox.jsx'
import Model from './Model.jsx'
import Object from './Object.jsx'
import Shader from './Shader.jsx'



export default function Experience() {

    const twister = useRef()
    const cube = useRef()
    

    return <>

        <color args={['#252731']} attach="background" />

        <Physics>
            {/* <Debug /> */}
            <Lights />
            <RigidBody
                type="fixed"
                restitution={0}
                friction={0.7}
            >
                <mesh receiveShadow position-y={- 1.25}>
                    <boxGeometry args={[10, 0.5, 10]} />
                    <meshStandardMaterial color="greenyellow" />
                </mesh>
            </RigidBody>


            <RigidBody type="fixed">
                <CuboidCollider args={[5, 2, 0.5]} position={[0, 1, 5.25]} />
                <CuboidCollider args={[5, 2, 0.5]} position={[0, 1, - 5.25]} />
                <CuboidCollider args={[0.5, 2, 5]} position={[5.25, 1, 0]} />
                <CuboidCollider args={[0.5, 2, 5]} position={[- 5.25, 1, 0]} />
            </RigidBody>


            <Player />

            <RigidBody
            restitution={1}
            friction={4.0}
            linearDamping={4.8}
            angularDamping={4.8}
            gravityScale={ 2.0}
            >
                <Fox />
            </RigidBody>

            <RigidBody
                type="kinematicPosition"
                restitution={0.2}
                friction={1}
                linearDamping={0.5}
                angularDamping={0.5}
            >
                <Model />
            </RigidBody>
            <Object />
            
        </Physics>

        <Shader />


        <Effects />
    </>
}