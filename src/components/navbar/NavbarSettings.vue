<script setup>
import { translate, translateUi } from '../../composables/Localization';
import { setTheme } from '../../composables/Utilities';
import { useSettingsStore } from '../../stores/SettingsStore';

const settings = useSettingsStore().settings;
const languages = {
    "en": "English",
    "jp": "日本語",
    "kr": "한국어",
    "tw": "繁體中文",
    "cn": "简体中文",
    "th": "ภาษาไทย",
    "vi": "Tiếng Việt"
}

function set(setting, value) {
    settings[setting] = value;

    if (setting == 'theme') {
        setTheme();
    }
}

</script>

<template>
    <div class="d-flex align-items-center mb-3">
        <span class="flex-fill me-4">{{ translateUi('navbar_settings_server') }}</span>
        <span class="d-flex align-items-center">
            <div class="dropdown d-inline">
                <button class="btn btn-sm btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown"><span>{{ translate('ServerName', settings.server) }}</span></button>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-dark drop-shadow">
                    <li v-for="i in 3"><button class="btn btn-dark dropdown-item" :class="{'active': settings.server === i-1}" @click="set('server', i-1)"><span>{{ translate('ServerName', i-1) }}</span></button></li>
                </ul>
            </div>
        </span>
    </div>
    <div class="d-flex align-items-center mb-1">
        <span class="flex-fill me-4">{{ translateUi('navbar_settings_language') }}</span>
        <span class="d-flex align-items-center">
            <div class="dropdown d-inline">
                <button class="btn btn-sm btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown"><span>{{ languages[settings.language] }}</span></button>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-dark drop-shadow">
                    <li v-for="(language, key) in languages"><button class="btn btn-dark dropdown-item" :class="{'active': settings.language === key}" @click="set('language', key)">{{ language }}</button></li>
                </ul>
            </div>
        </span>
    </div>
    <div class="text-muted mb-3">
        <small>{{ translateUi('navbar_settings_language_description') }}</small>
    </div>
    <div class="d-flex align-items-center mb-1">
        <span class="flex-fill me-4">{{ translateUi('navbar_settings_theme') }}</span>
        <span class="d-flex align-items-center">
            <div class="btn-group">
                <button type="button" class="btn btn-sm btn-dark" :class="{'active': settings.theme === 'auto'}" @click="set('theme', 'auto')">Auto</button>
                <button type="button" class="btn btn-sm btn-dark" :class="{'active': settings.theme === 'light'}" @click="set('theme', 'light')"><span class="px-2"><font-awesome-icon :icon="['fas', 'sun']" /></span></button>
                <button type="button" class="btn btn-sm btn-dark" :class="{'active': settings.theme === 'dark'}" @click="set('theme', 'dark')"><span class="px-2"><font-awesome-icon :icon="['fas', 'moon']" /></span></button>
            </div>
        </span>
    </div>
    <div class="text-muted mb-3">
        <small>{{ translateUi('navbar_settings_theme_description') }}</small>
    </div>
    <div class="d-flex align-items-center">
        <span class="flex-fill me-4">{{ translateUi('navbar_settings_contrast') }}</span>
        <span class="d-flex align-items-center">
            <div id="ba-navbar-contrast-toggle" class="btn-group">
                <button type="button" class="btn btn-sm btn-dark" :class="{'active': settings.highcontrast === false}" @click="set('highcontrast', false)">{{ translateUi('setting_off') }}</button>
                <button type="button" class="btn btn-sm btn-dark" :class="{'active': settings.highcontrast === true}" @click="set('highcontrast', true)">{{ translateUi('setting_on') }}</button>
            </div>
        </span>
    </div>
    <div class="text-muted mb-3">
        <small>{{ translateUi('navbar_settings_contrast_description') }}</small>
    </div>
    <div class="d-flex align-items-center">
        <span class="flex-fill me-4">{{ translateUi('navbar_settings_collection') }}</span>
        <span class="d-flex align-items-center">
            <div class="btn-group">
                <button type="button" id="ba-navbar-collection" class="btn btn-sm btn-dark" data-bs-toggle="modal" data-bs-target="#collection-data-modal">{{ translateUi('setting_open') }}</button>
            </div>
        </span>
    </div>
    <div class="text-muted mb-3">
        <small>{{ translateUi('navbar_settings_collection_description') }}</small>
    </div>
    <small id="navbar-version" class="text-muted"></small>
</template>

<style>
.text-muted {
    color: #6c757d!important;
}
</style>