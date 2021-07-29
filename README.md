<div align="center">
  <img src="https://github.com/thehen/decentraland-unlock-integration/blob/readme/docs/img/logo.png?raw=true"><br><br>
  <h1>
    Decentraland Unlock Demo
  </h1>

<p align="center">
  <a href="https://badge.fury.io/js/%40thehen%2Fdecentraland-unlock-integration"><img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg" alt="License Apache 2.0" height="18"></a>
</p>

</div>

A simple demo showcasing the [Unlock Integration library](https://github.com/thehen/decentraland-unlock-integration). You can click on a door to bring up an Unlock dialog. After pressing **purchase**, a transaction is made and the user acquires a membership. The door then opens, and the player can enter the building.

![Demo](https://github.com/thehen/unlock-decentraland-demo/blob/readme/docs/img/demo.gif?raw=true)

This scene shows you:

- How to use the Decentraland Unlock Integration library
- How to purchase an Unlock membership
- How to listen to events and have the environment react


## Try it out

**Install the CLI**

Download and install the Decentraland CLI by running the following command:

```bash
npm i -g decentraland
```

**Previewing the scene**

Download this example and navigate to its directory, then run:

```
$:  dcl start
```

Any dependencies are installed and then the CLI opens the scene in a new browser tab.

```
&ENABLE_WEB3
```

For example, if the URL is `http://127.0.0.1:8000?position=0%2C0&SCENE_DEBUG_PANEL`, make it `http://127.0.0.1:8000?position=0%2C0&SCENE_DEBUG_PANEL&ENABLE_WEB3`

Finally ensure you're connected to the Rinkeby Test Network in your wallet of choice. 

![Rinkeby](https://github.com/thehen/unlock-decentraland-demo/blob/master/docs/img/rinkeby.jpg?raw=true)

## Copyright info

This scene is protected with a standard Apache 2 licence. See the terms and conditions in the [LICENSE](/LICENSE) file.

## Support

If you have any questions, feel free to join the [Unlock Discord Server](https://docs.unlock-protocol.com/creators/plugins-and-integrations/discord) and I'll be happy to help.
