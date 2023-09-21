import { computed } from "vue";
import commonData from "../assets/data/common.json";
import { useSettingsStore } from "../stores/SettingsStore";

const settings = useSettingsStore().settings;

export const regionSettings = computed(() => {
    const region = commonData.regions[settings.server];
    return {
        AccountMaxLevel: region.studentlevel_max,
        WeaponMaxLevel: region.weaponlevel_max,
        BondMaxLevel: region.bondlevel_max,
        EquipmentMaxLevel: [region.gear1_max, region.gear2_max, region.gear3_max],
        WeaponUnlocked: region.weaponlevel_max > 0,
        WeaponMaxStarGrade: (region.weaponlevel_max / 10) - 2,
        GearUnlocked: true,
        BulletTypes: ['Normal', 'Explosion', 'Pierce', 'Mystic', 'Sonic'],
        ArmorTypes: ['Normal', 'LightArmor', 'HeavyArmor', 'Unarmed', 'ElasticArmor'],
    }
})