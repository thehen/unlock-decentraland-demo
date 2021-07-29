import * as unlock from '@thehen/decentraland-unlock-integration'
import { buildScene } from './builderContent'
import Door from './door'
import { movePlayerTo } from '@decentraland/RestrictedActions'

export let sceneMessageBus = new MessageBus()

buildScene()

// --- Door ---

const door = new Door(
  new GLTFShape('models/Door_Fantasy.glb'),
  {
    position: new Vector3(9.275432586669922, 0, 9.929542541503906),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1),
  },
  'Open',
  'Close'
)

// --- Unlock ---

// Add a lock
const decentralandLock = new unlock.Lock('0x9625Bc447d23117e22105B77FAC015F6B970f0C0')

// Lock initialised
unlock.eventManager.addListener(unlock.LockInitialised, "unlockInit", ({ lock, hasValidKey }) => {

  if (hasValidKey) {
    // already owns key so open the door
    sceneMessageBus.emit('openDoor', {})
  } else {
    // doesn't own key

    // Instantiate Unlock UI object
    const unlockPurchaseUI = new unlock.UnlockPurchaseUI(
      decentralandLock,
      'https://raw.githubusercontent.com/thehen/decentraland-unlock-integration/master/images/unlock-logo-black.png',
      'Unlock lets you easily offer paid memberships to your \n website or application. On this website, members \n can leave comments and participate in discussion. \n It is free to try! Just click "purchase" below.'
    )

    // Show UI when cube is clicked
    door.addComponent(

      new OnClick(() => {
        unlockPurchaseUI.show()
      },
        {
          button: ActionButton.ANY,
          showFeedback: true,
          hoverText: "Unlock Door",
        }
      )
    )

  }
})

// --- Events ---

unlock.eventManager.addListener(unlock.PurchaseSuccess, "purchase success", ({ lock }) => {
  // purchase successful
  sceneMessageBus.emit('openDoor', {})
})

unlock.eventManager.addListener(unlock.PurchaseFail, "purchase fail", ({ lock }) => {
  // purchase fail
  log("Purchase failed")
})

unlock.eventManager.addListener(unlock.TransactionSuccess, "transaction success", ({ lock }) => {
  // transaction success
  log("Transaction success")
})

unlock.eventManager.addListener(unlock.TransactionFail, "transaction fail", ({ lock }) => {
  // transaction fail
  log("Transaction failed")
  kickPlayer()
})

// If the transaction fails, kick the player out and close the door
const kickPlayer = () => {
  movePlayerTo({ x: 8.5, y: 0, z: 15 }, { x: 8.5, y: 2, z: 10 })
  sceneMessageBus.emit('closeDoor', {})
}

// --- Door Messages ---

sceneMessageBus.on('openDoor', ({ sender }) => {
  if (!door.isOpen) {
    door.toggle(true)
  }
})
sceneMessageBus.on('closeDoor', ({ sender }) => {
  if (door.isOpen) {
    door.toggle(false)
  }
})
