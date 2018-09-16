//
// var my_program=function()
// {
//    vn.import('vn.animation').then(start);
// };
//
// var start = function()
// {
//
//   var canvas = new GLCanvas("my_screen");
//   var R = new ResourceManager(canvas);
//   var om = new GLObjectMaker(canvas);
//
//   var a = new Animation();
//   a.addKeyFrame(0,{camAngle: -3.14/2});
//   a.addKeyFrame(1,{camAngle: 0});
//   a.addKeyFrame(2,{camAngle: 3.14/2});
//   a.addKeyFrame(3,{camAngle: 3.14});
//   a.addKeyFrame(4,{camAngle: 3.14+(3.14/2)});
//   a.setLoop(true);
//   a.whenNewFrame().then(function(f){
//     camYa = f.data.camAngle;
//   });
//   a.play();
//
//     var mouthOpen = true;
//     var mouthAngle = 0;
//     var highTail = true;
//     var tailAngle = 0;
//     var ballMoving = true;
//     var ballAngle = 0;
//     var zChange = 0;
//     var yChange = 0;
//
//     var keys=new Array(128);
//     for(var i=0;i<128;i++)keys[i]=false;
//     // var sz = 20;
//
//     var bodyGreen = new GLMaterial(canvas);
//     var bodyWhite = new GLMaterial(canvas);
//     var bodyBlack = new GLMaterial(canvas);
//     var bodyBlue = new GLMaterial(canvas);
//     var bodyOrange = new GLMaterial(canvas);
//     bodyGreen.setDiffuseColor([0,1,0]);
//     bodyBlack.setDiffuseColor([0,0,0]);
//     bodyWhite.setAmbientColor([1,1,1]);
//     bodyBlue.setAmbientColor([0,0,1]);
//     bodyOrange.setAmbientColor([0.823529, 0.411765, 0.117647]);
//
//     //head
//     om.identity();
//     om.box(0.2,0.2,0.2);
//     om.identity();
//     om.clear({uv:true});
//     var head = om.flush();
//     head.onTap=function(event)
//     {
//       //change
//     };
//     R.addObject("head",head);
//     head.setTexture("http://www.visineat.com/js/img/textures/metal3.jpg");
//     var mat = new GLMaterial(canvas);
//     head.setMaterial(bodyGreen);
//
//     //nose and mouth
//     om.translate([0.15,0.02,0]);
//     om.box(0.30,0.065,0.15);
//     om.identity();
//     om.clear({uv:true});
//     var upperM = om.flush();
//     R.addObject("upperM",upperM);
//     upperM.setMaterial(bodyGreen);
//     om.translate([0.14,-0.02,-0.05]);
//     om.box(0.02,0.02,0.02);
//     om.translate([0.06,0,0]);
//     om.box(0.02,0.02,0.02);
//     om.translate([0.06,0,0]);
//     om.box(0.02,0.02,0.02);
//     // om.identity();
//     om.translate([-0.14,0,0.1]);
//     om.box(0.02,0.02,0.02);
//     om.translate([0.06,0,0]);
//     om.box(0.02,0.02,0.02);
//     om.translate([0.06,0,0]);
//     om.box(0.02,0.02,0.02);
//     om.identity();
//     om.clear({uv:true});
//     var upperTeeth = om.flush();
//     upperTeeth.setMaterial(bodyWhite);
//     R.addObject("upperTeeth",upperTeeth);
//
//     om.translate([0.15,-0.065,0]);
//     om.box(0.30,0.025,0.15);
//     om.identity();
//     om.clear({uv:true});
//     var lowerM = om.flush();
//     R.addObject("lowerM",lowerM);
//     lowerM.setMaterial(bodyGreen);
//     om.translate([0.14,-0.04,0.05]);
//     om.box(0.02,0.02,0.02);
//     om.translate([0.06,0,0]);
//     om.box(0.02,0.02,0.02);
//     om.translate([0.06,0,0]);
//     om.box(0.02,0.02,0.02);
//     om.identity();
//     om.translate([0.14,-0.04,-0.05]);
//     om.box(0.02,0.02,0.02);
//     om.translate([0.06,0,0]);
//     om.box(0.02,0.02,0.02);
//     om.translate([0.06,0,0]);
//     om.box(0.02,0.02,0.02);
//     om.identity();
//     om.clear({uv:true});
//     var lowerTeeth = om.flush();
//     lowerTeeth.setMaterial(bodyWhite);
//     R.addObject("lowerTeeth",lowerTeeth);
//
//     function convertDegreesToRadians(degree)
//     {
//       return degree * (3.14/180);
//     }
//
//     setInterval(function(){
//
//       var rotationSpeed = 0.05;
//
//       if (mouthOpen)
//       {
//         //open mouth
//         upperM.rotateZ(convertDegreesToRadians(rotationSpeed));
//         upperTeeth.rotateZ(convertDegreesToRadians(rotationSpeed));
//         mouthAngle += (rotationSpeed);
//
//         lowerM.rotateZ(convertDegreesToRadians(-rotationSpeed));
//         lowerTeeth.rotateZ(convertDegreesToRadians(-rotationSpeed));
//       }
//       else
//       {
//         //close mouth
//         upperM.rotateZ(convertDegreesToRadians(-rotationSpeed));
//         upperTeeth.rotateZ(convertDegreesToRadians(-rotationSpeed));
//         mouthAngle -= (rotationSpeed);
//
//         lowerM.rotateZ(convertDegreesToRadians(rotationSpeed));
//         lowerTeeth.rotateZ(convertDegreesToRadians(rotationSpeed));
//       }
//
//       if (mouthAngle > 20){
//           mouthOpen = false;
//       } //check to see if the mouth is all the way open
//
//       else if (mouthAngle <= 0){
//         mouthOpen = true;
//       } //check to see if the mouth is all the way closed
//
//
//     },60/1000); // update 1/60th of a second
//
//     //eyes
//     om.translate([0,0.05,0.1]);
//     om.rotateZ(-3.14/2);
//     om.box(-0.05,0.05,0.005);
//     om.translate([0,0,-0.2]);
//     om.box(-0.05,0.05,0.005);
//     om.identity();
//     om.clear({uv:true});
//     var eyes = om.flush();
//     R.addObject("eyes", eyes);
//     om.translate([0,0.05,0.101]);
//     om.box(-0.02,0.02,0.01);
//     om.translate([0,0,-0.201]);
//     om.box(-0.02,0.02,0.01);
//     om.clear({uv:true});
//     om.identity();
//     var eyeballs = om.flush();
//     R.addObject("eyeballs", eyeballs);
//     eyes.setMaterial(bodyWhite);
//     eyeballs.setMaterial(bodyBlack);
//
//     //body
//     om.translate([-0.1,-0.2,0]);
//     om.box(0.2,0.6,0.2);
//     om.identity();
//     om.clear({uv:true});
//     var gatorbody = om.flush();
//     om.translate([-0.1,-0.3,0]);
//     om.box(0.205,0.405,0.22);
//     om.identity();
//     om.clear({uv:true});
//     var gatorShirt = om.flush();
//     om.translate([0.01,-0.3,0]);
//     om.rotateY(3.14/2);
//     om.rect(0.1,0.3);
//     var gatorbodyfront = om.flush();
//     R.addObject("gatorbody",gatorbody);
//     R.addObject("gatorbodyfront",gatorbodyfront);
//     R.addObject("gatorShirt",gatorShirt);
//     gatorbodyfront.setTexture("http://www.visineat.com/devs/dev4/WebGL/A05/gatorsF.png");
//     // gatorbodyfront.setMaterial(bodyWhite);
//     gatorbody.setMaterial(bodyGreen);
//     gatorShirt.setMaterial(bodyBlue);
//
//     //tail
//     // om.rotateZ();
//     // om.translate([-0.1,-0.25,0]);
//     om.box(0.15,0.1,0.1);
//     // om.identity();
//     om.clear({uv:true});
//     var tail1 = om.flush();
//     R.addObject("tail1", tail1);
//     tail1.setMaterial(bodyGreen);
//     // om.rotateZ(-3.14/6);
//     // om.translate([-0.24,-0.04,0]);
//     om.box(0.15,0.35,0.1);
//     // om.identity();
//     om.clear({uv:true});
//     var tail2 = om.flush();
//     R.addObject("tail2", tail2);
//     tail2.setMaterial(bodyGreen);
//     // om.rotateZ(3.14/2);
//     // om.translate([-0.10,0.15,0]);
//     om.box(0.1,0.05,0.1);
//     // om.identity();
//     om.clear({uv:true});
//     var tail3 = om.flush();
//     R.addObject("tail3", tail3);
//     tail3.setMaterial(bodyGreen);
//
//     //hands
//     om.identity();
//     om.translate([0,-0.2,0.15]);
//     om.box(0.175,0.05,0.1);
//     om.identity();
//     om.translate([0,-0.2,-0.15]);
//     om.box(0.175,0.05,0.1);
//     om.identity();
//     om.clear({uv:true});
//     var hands = om.flush();
//     R.addObject("hands", hands);
//     hands.setMaterial(bodyGreen);
//
//     //legs
//     om.translate([0,-0.4,0.15]);
//     om.box(0.175,0.05,0.1);
//     om.identity();
//
//     om.translate([0.1,-0.45,0.15]);
//     om.rotateZ(-3.14/2);
//     om.box(0.175,0.05,0.1);
//     om.identity();
//
//     om.translate([0,-0.4,-0.15]);
//     om.box(0.175,0.05,0.1);
//     om.identity();
//
//     om.translate([0.1,-0.45,-0.15]);
//     om.rotateZ(-3.14/2);
//     om.box(0.175,0.05,0.1);
//     om.identity();
//
//     om.translate([0.155,-0.5,0.15]);
//     om.box(0.175,0.05,0.1);
//     om.identity();
//
//     om.translate([0.155,-0.5,-0.15]);
//     om.box(0.175,0.05,0.1);
//     om.identity();
//
//     om.clear({uv:true});
//     var legs = om.flush();
//     R.addObject("legs", legs);
//     legs.setMaterial(bodyGreen);
//
//     om.translate([0,0,0.5]);
//     om.sphere(50,0.05,0.05,0.05);
//     om.identity();
//     om.clear({uv:true});
//     var orangeBall = om.flush();
//     R.addObject("orangeBall", orangeBall);
//     orangeBall.setMaterial(bodyOrange);
//
// canvas.onSetup = function()
// {
//   canvas.setLoadingStatus(false);
//
// };
//
//
// canvas.onDrag = function(event){
//   canvas.getCamera().oneFingerRotate(event,{radius:2});
// };
//
// var fps=30;
// var acceleration=[0,0,0];//units/frame^2
//                                                        //1second -> fps frames
// var velocity=[0,0,0];//units/frame
// var position=[0,0,0];//units
//
// var orientation=0;//in radians
// var forward_acceleration=0;
//
// var angle = false;
// var x = 3.14/6;
//
// var gameStart = false;
// // var camspeed = 0.5;
// canvas.onDraw = function()
// {
//
//   canvas.setBackgroundColor(0.498039,1,0.831373);
//   // canvas.setTexture("http://www.visineat.com/devs/dev4/WebGL/A05/Fgradient.jpg");
//   var cam = canvas.getCamera();
//
//   cam.translate([0,0.2,-1.5]);
//
//   cam.rotateY(camYa);
//   cam.pushMatrix();
//   cam.translate(position);
//   // cam.rotateY(orientation);
//
//   R.objects.head.updateShader();
//   R.objects.head.draw();
//
//   R.objects.upperM.updateShader();
//   R.objects.upperM.draw();
//   R.objects.upperTeeth.updateShader();
//   R.objects.upperTeeth.draw();
//   R.objects.lowerM.updateShader();
//   R.objects.lowerM.draw();
//   R.objects.lowerTeeth.updateShader();
//   R.objects.lowerTeeth.draw();
//
//   R.objects.eyes.updateShader();
//   R.objects.eyes.draw();
//
//   R.objects.gatorbody.updateShader();
//   R.objects.gatorbody.draw();
//
//   R.objects.gatorShirt.updateShader();
//   R.objects.gatorShirt.draw();
//
//
//
//   R.objects.hands.updateShader();
//   R.objects.hands.draw();
//
//
//   R.objects.legs.updateShader();
//   R.objects.legs.draw();
//
//   R.objects.eyes.updateShader();
//   R.objects.eyes.draw();
//
//   R.objects.eyeballs.updateShader();
//   R.objects.eyeballs.draw();
//
//   R.objects.gatorbodyfront.updateShader();
//   R.objects.gatorbodyfront.draw();
//
//   cam.translate([-0.23,-0.1,0]);
//   R.objects.tail1.updateShader();
//   R.objects.tail1.draw();
//
//   cam.translate([-0.1,0.228,0]);
//   R.objects.tail2.updateShader();
//   R.objects.tail2.draw();
//
//   cam.translate([-0.1,0.2,0]);
//   R.objects.tail3.updateShader();
//   R.objects.tail3.draw();
//
//   cam.popMatrix();//it retrieves tha last state of the camera
//
// };
//
// canvas.start();
//
// };
