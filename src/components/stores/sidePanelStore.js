import { defineStore } from "pinia";

export const useSidePanelStore = defineStore('sidePanel', {
    state: () =>({
        isSidePanelOpen: true,
    }),
    actions: {
        toggleSidePanel() {
            this.isSidePanelOpen = !this.isSidePanelOpen;
        },
        showSidePanel(){
            this.isSidePanelOpen = true;
        },
        hideSidePanel(){
            this.isSidePanelOpen = false;
        }
    }
})