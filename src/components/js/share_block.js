import {translate} from "@/utils/general";
import buttonCopy from "@/components/ButtonCopy";

export default {
    name: "share_block",
    components: {
        buttonCopy
    },
    computed: {
        page_link() {
            return location.href;
        }
    },
    data: () => ({
        dialog: false,
        share_links: null
    }),
    methods: {
        translate
    },
    mounted() {
        this.share_links = {
            vk: `https://vk.com/share.php?url=${encodeURIComponent(location.href)}`,
            twitter: `http://www.schooleymitchell.com/keffeler=${encodeURIComponent(location.href)}`,
            facebook: `https://www.facebook.com/sharer.php?u=${encodeURIComponent(location.href)}`,
            ok: `https://connect.ok.ru/offer?url=${encodeURIComponent(location.href)}`
        };
    }
};
