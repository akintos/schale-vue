<script setup>
import { useSettingsStore } from '../../stores/SettingsStore';


const props = defineProps({
    enemy: {
        type: Object,
        required: true
    },
    level: Number
})

const settings = useSettingsStore().settings;
const smallTextCharacters = {'en':12, 'jp':6, 'kr':8, 'tw':6, 'cn':6, 'zh':6, 'th': 12, 'vi': 12};


</script>

<template>

<div class="selection-grid-card card-enemy">
    <div class="card-img"><img :src="enemy.Icon ? `/images/enemy/${enemy.Icon}.webp` : '/images/enemy/noicon.webp'"></div>
    <div class="card-badge enemy-level">Lv.{{ level }}</div>
    <div class="card-badge enemy-atk" :class="`bg-atk-${enemy.BulletType.toLowerCase()}`"><img src="/images/ui/Type_Attack_s.png" style="width:100%;"></div>
    <div class="card-badge enemy-def" :class="`bg-def-${enemy.ArmorType.toLowerCase()}`"><img src="/images/ui/Type_Defense_s.png" style="width:100%;"></div>
    <span v-if="enemy.IsNPC" class="card-badge enemy-npc">NPC</span>
    <template v-else>
        <div v-if="enemy.Rank == 'Elite'" class="card-badge enemy-rank"><img src="/images/ui/Common_Icon_Enemy_Elite.png" style="width:22px;"></div>
        <div v-if="enemy.Rank == 'Champion' || enemy.Rank == 'Boss'" class="card-badge enemy-rank"><img src="/images/ui/Common_Icon_Enemy_Champion.png" style="width:31px;"></div>
    </template>
    <div class="card-label"><span class="label-text" :class="{smalltext: enemy.Name.length > smallTextCharacters[settings.language]}">{{ enemy.Name }}</span></div>
</div>


</template>