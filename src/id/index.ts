import {v4 as uuidv4} from "uuid";
// import * as Payments from "../payments";
// @ts-ignore
import OneSignal from "react-native-onesignal";
// @ts-ignore
// import { ONESIGNAL_SECRET } from "react-native-dotenv";
import * as idstore from "./idstore";
import Sentry from "../sentry";

/**
 * At the moment, we don't really have an account system.
 *
 * But in a lot of cases (like checkup reminders, or support calls),
 * we need to be able to identify a user's phone.
 *
 * The way we do that is we assign everyone a single UUIDv4
 * with the prefix "user-". For example:
 * "user-10ba038e-48da-487b-96e8-8d3b99b6d18a"
 *
 * We add a prefix so it's easily debuggable and distinguishable
 * from other UUIDs created by the various other systems we use.
 */
export async function identify() {
  try {
    let userID = await idstore.getUserID();
    if (!userID) {
      userID = "user-" + uuidv4();
    }
    await idstore.storeUserID(userID);

    // Identify in RevenueCat
    // Payments.alias(userID);

    // Identify in OneSignal
    OneSignal.init('dummy', {
      kOSSettingsKeyAutoPrompt: false,
      kOSSettingsKeyInFocusDisplayOption: 0,
    });
    OneSignal.sendTag("userID", userID);
  } catch (err) {
    // Just capture the exception and continue, don't :rip:
    Sentry.captureException(err);
  }
}

export async function addTagsToUser(tags: { [key: string]: string }) {

}

export async function getUserID(): Promise<string> {
  const id = await idstore.getUserID();
  if (!id) {
    await identify();
    return idstore.getUserID();
  }

  return id;
}
