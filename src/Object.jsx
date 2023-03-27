import { Physics,RigidBody } from '@react-three/rapier'

export default function Object() {

    return <>
        <RigidBody
            restitution={1}
            friction={0}
            linearDamping={0.5}
            angularDamping={0.5}

        >
            <mesh castShadow scale={[0.4, 0.4, 0.4]} position={[0, 1, 0]}>
                <boxGeometry />
                <meshStandardMaterial color="red" />
            </mesh>
        </RigidBody>

        <RigidBody
            restitution={1}
            friction={0}
            linearDamping={0.5}
            angularDamping={0.5}

        >
            <mesh castShadow scale={[0.6, 0.6, 0.6]} position={[0, 1, 4]}>
                <boxGeometry />
                <meshStandardMaterial color="yellow" />
            </mesh>
        </RigidBody>

        <RigidBody
            restitution={1}
            friction={0}
            linearDamping={0.1}
            angularDamping={0.1}
            gravityScale={0.1}
        >
            <mesh castShadow scale={[0.8, 0.8, 0.8]} position={[2, 1, -1]}>
                <tetrahedronGeometry />
                <meshStandardMaterial color="blue" />
            </mesh>
        </RigidBody>
        
        <RigidBody
            restitution={1}
            friction={0}
            linearDamping={0.1}
            angularDamping={0.1}
            gravityScale={0.8}
        >
            <mesh castShadow scale={[0.2, 1.2, 0.2]} position={[-2, 1, 2]}>
                <boxGeometry />
                <meshStandardMaterial color="green" />
            </mesh>
        </RigidBody>

        <RigidBody
            restitution={1}
            friction={0}
            linearDamping={0.1}
            angularDamping={0.1}
            gravityScale={0.2}
        >
            <mesh castShadow scale={[0.1, 2.8, 0.1]} position={[-2, 1, -2]}>
                <cylinderGeometry />
                <meshStandardMaterial color="gray" />
            </mesh>
        </RigidBody>
    </>
}
