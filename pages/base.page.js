export class BasePage {
    constructor(page) {
        this.page = page;
        this.searchInput = page.locator('[class*="MuiInputBase-input"]');
        this.tracksNames = page.locator('[class*="MuiGrid-grid-xs-4"] p');
        this.allAddToPlaylistButtons = page.locator('[id="tracklist"] div[class*="MuiGrid-container"] button');
        this.yourPlaylistTitle = page.locator('[id="playlist"]>div>p');
        this.playlistTrack = page.locator('[id="playlist"] div[class*="MuiGrid-grid-xs-4"] p');
        this.totalDuration = page.locator('[id="playlist-duration"]');
        this.playlistRemoveButton = page.locator('[id="playlist"] div[class*="MuiGrid-container"] button');
    }

    async url() {
        await this.page.goto("/");
    }

    async fillSearchInput(text) {
        await this.searchInput.fill(text);
    }

    async clickRandomAddToPlaylistButtons(index) {
        await this.allAddToPlaylistButtons.nth(index).click();
    }

    async clickPlaylistRemoveButton() {
        await this.playlistRemoveButton.click();
    }
}
