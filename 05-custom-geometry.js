//miasto
// once everything is loaded, we run our Three.js stuff. 
window.onload = function () {

    // create a scene, that will hold all our elements such as objects, cameras and lights.
    const scene = new THREE.Scene();

    // create a camera, which defines where we're looking at.
    const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );

    // create a render and set the size
    const renderer = new THREE.WebGLRenderer();

    renderer.setClearColor( new THREE.Color(0xdddddd) );
    renderer.setSize( window.innerWidth, window.innerHeight) ;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // add OrbitControls
    const controls = new THREE.OrbitControls( camera, renderer.domElement );


    // add the output of the renderer to the html element
    document.getElementById( "WebGL-output" ).appendChild( renderer.domElement );

    // create the ground plane
    const planeGeometry = new THREE.PlaneGeometry( 60, 40, 1, 1 );
    //const planetexture = new THREE.TextureLoader().load( "textures/grass.jpg" );
    //planetexture.wrapS = THREE.RepeatWrapping;
    //planetexture.wrapT = THREE.RepeatWrapping;
    //planetexture.repeat.set( 4, 4 );
    //const planeMaterial = new THREE.MeshLambertMaterial( {color: 0x5555ff, transparent: true, opacity: 0.8, side: THREE.DoubleSide} );
    const planeMaterial = new THREE.MeshStandardMaterial( {/*map:planetexture*/color: 0x00FF00, transparent: true, opacity: 0.8, side: THREE.DoubleSide, roughness: 1.0, metalness: 0.0} );
    const plane = new THREE.Mesh( planeGeometry, planeMaterial );
    plane.receiveShadow = true;

    // rotate and position the plane
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.x = 0.0;
    plane.position.y = -1.0;
    plane.position.z = 0.0;
    controls.update();

    // add the plane to the scene
    scene.add(plane);

    // position and point the camera to the center of the scene
    camera.position.x = -20.0;
    camera.position.y = 25.0;
    camera.position.z = 20.0;
    camera.lookAt( new THREE.Vector3( 5.0, 0.0, 0.0 ) );


    // add subtle ambient lighting
    const ambientLight = new THREE.AmbientLight( 0x494949 );
    scene.add( ambientLight );
//Create a WebGLRenderer and turn on shadows in the renderer
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

//Create a SpotLight and turn on shadows for the light
const light = new THREE.SpotLight( 0xffffff );
light.position.set( -40,30,50 );
light.castShadow = true; // default false
scene.add( light );

//Set up shadow properties for the light
light.shadow.mapSize.width = 512; // default
light.shadow.mapSize.height = 512; // default
light.shadow.camera.near = 0.5; // default
light.shadow.camera.far = 500; // default
light.shadow.focus = 1; // default

//tworzenie drogi1
const geometryd1 = new THREE.PlaneGeometry( 60, 5 );
const materiald1 = new THREE.MeshStandardMaterial( {color: 0x000000, side: THREE.DoubleSide} );
const droga1 = new THREE.Mesh( geometryd1, materiald1 );
droga1.rotation.x =Math.PI / 2;
droga1.position.set(0,-0.9,0);
droga1.receiveShadow = true;
scene.add( droga1 );
//tworzenie drogi2
const geometryd2 = new THREE.PlaneGeometry(40,5);
const droga2 = new THREE.Mesh( geometryd2, materiald1 );
droga2.rotation.z = Math.PI/2;
droga2.rotation.x =Math.PI / 2;
droga2.position.set(0,-0.9,0);
droga1.receiveShadow = true;
scene.add( droga2 );
//tworzenie chodnika1 
const geometrych1 = new THREE.PlaneGeometry(40,10);
const materialch1 = new THREE.MeshStandardMaterial({color:0x808080 , side : THREE.DoubleSide} );
const chodnik1 = new THREE.Mesh( geometrych1, materialch1 );
chodnik1.rotation.z = Math.PI/2;
chodnik1.rotation.x =Math.PI / 2;
chodnik1.position.set(0,-0.99,0);
chodnik1.receiveShadow = true;
scene.add( chodnik1 );
//tworzenie chodnika2
const geometrych2 = new THREE.PlaneGeometry(60,10);
const chodnik2 = new THREE.Mesh( geometrych2, materialch1 );
chodnik2.rotation.x =Math.PI / 2;
chodnik2.position.set(0,-0.99,0);
chodnik2.receiveShadow = true;
scene.add( chodnik2 );
//tworzenie wierzowca
const geometryw = new THREE.BoxGeometry( 7, 15, 7 );
const materialw = new THREE.MeshStandardMaterial( {color: 0x000000} );
const wierzowiec = new THREE.Mesh( geometryw, materialw );
wierzowiec.position.set(8.5,6.5,8.5);
wierzowiec.castShadow = true; //default is false
wierzowiec.receiveShadow = true; //default
scene.add( wierzowiec );
//tworzenie drugiego pietra wierzowca
const geometryp2 = new THREE.BoxGeometry( 4.5, 10, 4.5 );
const materialp2 = new THREE.MeshStandardMaterial( {color: 0x312f35} );
const p2 = new THREE.Mesh( geometryp2, materialp2 );
p2.castShadow = true;
p2.receiveShadow = true ;
p2.position.set(8.5,17,8.5);
scene.add( p2 );
//tworzenie dachu do wierzowca
const geometrydw = new THREE.CylinderGeometry( 0, 2.5, 15, 4 );
const materialdw = new THREE.MeshStandardMaterial( {color: 0xf0f0f0} );
const dach = new THREE.Mesh( geometrydw, materialdw );
dach.position.set(8.5,20,8.5);
dach.castShadow = true;
dach.receiveShadow = true;
scene.add( dach );

//tworzenie jeziorka
const geometryj = new THREE.CircleGeometry( 7, 30, 2 , 5 );
const materialj = new THREE.MeshStandardMaterial( { color: 0x0000ff,side: THREE.DoubleSide } );
const jezioro = new THREE.Mesh( geometryj, materialj );
jezioro.rotation.x = Math.PI / 2;
jezioro.position.set(-15,-0.9,-12.5);
jezioro.castShadow = true;
jezioro.receiveShadow = true;
scene.add( jezioro );
//tworzenie drzewa  1(konar)
const geometryd = new THREE.CylinderGeometry( 0.5, 0.5, 4, 8 );
const materiald = new THREE.MeshStandardMaterial( {color: 0x964b00} );
const konar1 = new THREE.Mesh( geometryd, materiald );
konar1.position.set(-25,1,-7);
konar1.castShadow = true;
konar1.receiveShadow = true;
scene.add( konar1 );
// tworzenie drzewa 1 (korona)
const geometrydk = new THREE.SphereGeometry( 2, 32, 16 );
const materialdk = new THREE.MeshStandardMaterial( { color: 0x0E5104 } );
const korona1 = new THREE.Mesh( geometrydk, materialdk );
korona1.position.set(-25,3.7,-7);
korona1.castShadow = true;
korona1.receiveShadow = true;
scene.add( korona1 );
//tworzenie domu
const geometrydom = new THREE.BoxGeometry( 6, 6, 10 );
const materialdom = new THREE.MeshStandardMaterial( {color: 0x964B00} );
const dom = new THREE.Mesh( geometrydom, materialdom );
dom.position.set(13,2,-13.5);
dom.castShadow = true;
dom.receiveShadow = true;
scene.add( dom );
//tworzenie dachu domu 
const geometrydd = new THREE.CylinderGeometry( 0, 7.5, 10, 4 );
const materialdd = new THREE.MeshStandardMaterial( {color: 0x82A20C} );
const dachd = new THREE.Mesh( geometrydd, materialdd );
dachd.rotation.y = Math.PI / 4 ;
dachd.position.set(13,10,-13.5);
dachd.castShadow = true;
dachd.receiveShadow = true;
scene.add( dachd );
//tworzenie drzewa  2(konar)
const konar2 = new THREE.Mesh(geometryd,materiald)
konar2.position.set(20,1,-14);
konar2.castShadow = true;
konar2.receiveShadow = true;
scene.add( konar2 );
// tworzenie drzewa 2 (korona)
const korona2 = new THREE.Mesh(geometrydk,materialdk)
korona2.position.set(20,3.7,-14);
korona2.castShadow = true;
korona2.receiveShadow = true;
scene.add( korona2 );
//tworzenie drzewa  3(konar)
const konar3 = new THREE.Mesh(geometryd,materiald)
konar3.position.set(25,1,-12);
konar3.castShadow = true;
konar3.receiveShadow = true;
scene.add( konar3 );
// tworzenie drzewa 3 (korona)
const korona3 = new THREE.Mesh(geometrydk,materialdk)
korona3.position.set(25,3.7,-12);
korona3.castShadow = true;
korona3.receiveshadow = true;
scene.add( korona3 );



    const geometry = new THREE.BufferGeometry();

    const vertices = new Float32Array( [
       1.0,  3.0,  1.0,
       1.0, -1.0,  1.0,
       1.0,  3.0, -1.0,

       1.0, -1.0,  1.0,
       1.0, -1.0, -1.0,
       1.0,  3.0, -1.0,

      -1.0,  3.0, -1.0,
      -1.0, -1.0, -1.0,
      -1.0,  3.0,  1.0,

      -1.0, -1.0, -1.0,
      -1.0, -1.0,  1.0,
      -1.0,  3.0,  1.0,

      -1.0,  3.0, -1.0,
      -1.0,  3.0,  1.0,
       1.0,  3.0, -1.0,

      -1.0,  3.0,  1.0,
       1.0,  3.0,  1.0,
       1.0,  3.0, -1.0,

      -1.0, -1.0,  1.0,
      -1.0, -1.0, -1.0,
       1.0, -1.0,  1.0,

      -1.0, -1.0, -1.0,
       1.0, -1.0, -1.0,
       1.0, -1.0,  1.0,

      -1.0,  3.0,  1.0,
      -1.0, -1.0,  1.0,
       1.0,  3.0,  1.0,

      -1.0, -1.0,  1.0,
       1.0, -1.0,  1.0,
       1.0,  3.0,  1.0,

       1.0,  3.0, -1.0,
       1.0, -1.0, -1.0,
      -1.0,  3.0, -1.0,

       1.0, -1.0, -1.0,
      -1.0, -1.0, -1.0,
      -1.0,  3.0, -1.0
    ] );

    geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
    geometry.computeBoundingSphere();

    const materials = [
        new THREE.MeshLambertMaterial( {opacity: 0.6, color: 0x44ff44, transparent: true} ),
        new THREE.MeshBasicMaterial( {color: 0x00ff00, wireframe: true} )
    ];

    const mesh = new THREE.Group( geometry, materials );
    materials.forEach( function ( e ) {
        mesh.add(new THREE.Mesh( geometry, e ));
    });
    mesh.children.forEach( function ( e ) {
        e.castShadow = true;
    });

    scene.add( mesh );

    function animate() {

            requestAnimationFrame( animate );

            mesh.children.forEach( function ( e ) {
                e.geometry.vertices = vertices;
                e.geometry.verticesNeedUpdate = true;
                e.geometry.computeVertexNormals();
            });
                light.position.x+=0.1;



            renderer.render( scene, camera );
    }

    animate();

    // redraw in case of window's size change
    window.addEventListener(
      'resize',
      function() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.render( scene, camera );
      },
      false
    );

}
