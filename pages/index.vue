<template>
    <div class="container mx-auto bg-gray-300 p-8">
        <div @click="loadMatterport"> Load Matterport</div>
        <div @click="triggerAction"> Action </div>
        <div @click="setFloorMode"> setFloorMode </div>
        <div @click="setFloorModeVRStation"> setFloorModeVRStation </div>
        <div @click="setFloorModeShop"> setFloorModeShop </div>
        <div @click="setFloorModeRunning"> setFloorModeRunning </div>
        <div @click="setFloorModeGolf"> setFloorModeGolf </div>
        <div @click="setInsideMode"> setInsideMode </div>
        <div @click="startTour"> startTour </div>
        <div @click="stopTour"> stopTour </div>

        <client-only>
                <!-- src="https://my.matterport.com/show?m=8zA9hZnY4rx&play=1&applicationKey=z48n7ssnmny40tsqp1a0a674d" -->
                <!-- src="https://my.matterport.com/show?m=CynFABR6qMq&play=1&applicationKey=z48n7ssnmny40tsqp1a0a674d" -->
            <iframe width="853" height="480"
                src="https://my.matterport.com/show?m=CynFABR6qMq&play=1&applicationKey=z48n7ssnmny40tsqp1a0a674d"


                frameborder="0" allow="fullscreen; vr" id="showcase-iframe" ref="iframeRef">
            </iframe>
        </client-only>

    </div>
</template>
<script setup lang="ts">
const iframeRef = ref(null);
const mpSdk = ref(null)

onMounted(async () => {

    console.log("XXZZ");

    const iframe = iframeRef.value;

    // // connect the sdk; log an error and stop if there were any connection issues
    // try {
    //     const mpSdk = await window.MP_SDK.connect(
    //         iframe, // Obtained earlier
    //         'abc123456789', // Your SDK key
    //         '' // Unused but needs to be a valid string
    //     );
    //     onShowcaseConnect(mpSdk);
    // } catch (e) {
    //     console.error(e);
    // }

    // function onShowcaseConnect(mpSdk) {
    //     // start making calls on mpSdk as described in the reference docs
    // }



})



async function triggerAction() {
    console.log("triggerAction");
    //  mpSdk.value.Camera.lookAtScreenCoords(500, 320)
    mpSdk.value.Camera.moveInDirection(mpSdk.value.Camera.Direction.FORWARD)
}



async function setFloorMode(params: type) {
    const position = { x: 0, y: 100, z: 10 };
    const rotation = { x: -90, y: 0 };
    const transition = "transition.fly";
    const zoom = 30;
    mpSdk.value.Mode.moveTo(mpSdk.value.Mode.Mode.FLOORPLAN, {
        position: position,
        rotation: rotation,
        transition: transition,
        zoom,
    })
}



async function setFloorModeVRStation(params: type) {
    const position = { x: 0, y: 100, z: 30 };
    const rotation = { x: -90, y: 0 };
    const transition = "transition.fly";
    const zoom = 8;
    mpSdk.value.Mode.moveTo(mpSdk.value.Mode.Mode.FLOORPLAN, {
        position: position,
        rotation: rotation,
        transition: transition,
        zoom,
    })
}


async function setFloorModeShop(params: type) {
    const position = { x: 0, y: 100, z: 10 };
    const rotation = { x: -90, y: 0 };
    const transition = "transition.fly";
    const zoom = 8;
    mpSdk.value.Mode.moveTo(mpSdk.value.Mode.Mode.FLOORPLAN, {
        position: position,
        rotation: rotation,
        transition: transition,
        zoom,
    })
}


async function setFloorModeRunning(params: type) {
    const position = { x: -20, y: 100, z: 45 };
    const rotation = { x: -90, y: 0 };
    const transition = "transition.fly";
    const zoom = 8;
    mpSdk.value.Mode.moveTo(mpSdk.value.Mode.Mode.FLOORPLAN, {
        position: position,
        rotation: rotation,
        transition: transition,
        zoom,
    })
}


async function setFloorModeGolf(params: type) {
    const position = { x: -20, y: 100, z: 30 };
    const rotation = { x: -90, y: 0 };
    const transition = "transition.fly";
    const zoom = 8;
    mpSdk.value.Mode.moveTo(mpSdk.value.Mode.Mode.FLOORPLAN, {
        position: position,
        rotation: rotation,
        transition: transition,
        zoom,
    })
}


async function startTour(params: type) {
    mpSdk.value.Tour.start(3)
}

//stop tour
async function stopTour(params: type) {
    mpSdk.value.Tour.stop()
}





async function setInsideMode(params: type) {

    mpSdk.value.Mode.moveTo(mpSdk.value.Mode.Mode.INSIDE, {

    })
}

//callback function called loadMatterport
async function loadMatterport() {
    console.log("loadMatterport");
    const iframe = iframeRef.value;
    // connect the sdk; log an error and stop if there were any connection issues
    try {
        mpSdk.value = await window.MP_SDK.connect(
            iframe, // Obtained earlier
            'z48n7ssnmny40tsqp1a0a674d', // Your SDK key
            '' // Unused but needs to be a valid string
        );
        onShowcaseConnect(mpSdk.value);
    } catch (e) {
        console.error(e);
    }

    function onShowcaseConnect(mpSdk) {
        // start making calls on mpSdk as described in the reference docs
    }
}



</script>