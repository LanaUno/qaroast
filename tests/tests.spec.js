import { test, expect } from "@playwright/test";
import { BasePage } from "../pages/base.page";
import * as data from "../testData";
let basePage;

test.describe("Playlist functionalities", () => {
    test.beforeEach(async ({ page }) => {
        basePage = new BasePage(page);
        await basePage.url();
    });
    test("Search input field filtering the available tracks", async ({ page }) => {
        const tracksNames = await basePage.tracksNames.allTextContents();
        const enteredValue = await basePage.searchInput.inputValue();
        const filteredTracks = await basePage.tracksNames.allTextContents();

        let tracksNamesArr = [];
        for (let i = 0; i < tracksNames.length; i++) {
            let a = tracksNames[i].replace(" ", "").toLowerCase();
            tracksNamesArr.push(a);
        }
        await basePage.fillSearchInput(data.searchValue);

        let count = 0;
        for (const str of tracksNamesArr) {
            if (str.includes(enteredValue)) {
                count++;
            }
        }
        expect(filteredTracks.length).toBe(count);
    });
    test('Add Track Using "+" Button', async () => {
        const count = await basePage.allAddToPlaylistButtons.count();
        const randomIndex = Math.floor(Math.random() * count);
        const randomTrackName = await basePage.tracksNames.nth(randomIndex).textContent();

        await basePage.clickRandomAddToPlaylistButtons(randomIndex);
        const playlistTrack = await basePage.playlistTrack.textContent();

        await expect(basePage.yourPlaylistTitle).toBeVisible();
        await expect(basePage.playlistTrack).toBeVisible;
        await expect(randomTrackName).toBe(playlistTrack);
    });
    test("Verify Total Duration of the Playlist in Seconds", async () => {
        for (let i = 0; i < data.allTracksDuraions.length; i++) {
            await basePage.clickRandomAddToPlaylistButtons(i);
            const totalDuration = await basePage.totalDuration.textContent();
            expect(data.allTracksDuraions[i]).toBe(Number(totalDuration));
            await basePage.clickPlaylistRemoveButton();
        }
    });
});
