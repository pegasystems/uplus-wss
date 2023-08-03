<template>
  <div class="col col-1">
    <div class="primary-card">
      <Banner
        v-if="
          typeof settings.banner !== 'undefined' &&
          settings.banner.hidebanner !== 'true' &&
          settings.banner.hidebanner !== true
        "
      />
      <AccountList />
      <QuickLinks />
    </div>
    <MashupMainArea
      v-if="typeof settings.todo !== 'undefined' && settings.todo.url !== ''"
      :key="reloadToDoMashup"
    />
    <RecentActivity
      v-if="
        typeof settings.todo !== 'undefined' &&
        settings.todo.hideactivity !== 'true' &&
        settings.todo.hideactivity !== true
      "
      :key="reloadActivityMashup"
    />
    <div class="flex">
      <section class="flex-1 cash-projections primary-card">
        <div class="flex">
          <h3>{{ $t('message.cash_projections') }}</h3>
          <div>
            <p>{{ $t('message.income') }}</p>
            <span> <i class="pi pi-arrow-down pi-error"></i>17.4% </span>
          </div>
          <div>
            <p>{{ $t('message.cost') }}</p>
            <span> <i class="pi pi-arrow-up pi-success"></i>12.2% </span>
          </div>
          <div>
            <p>{{ $t('message.balance') }}</p>
            <span> <i class="pi pi-arrow-down pi-error"></i>2.1% </span>
          </div>
        </div>
        <div>
          <p class="dropdown">
            {{ $t('message.cash_projections_dropdown') }}
            <i class="pi pi-caret-down"></i>
          </p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 305">
          <g transform="translate(80,40)">
            <g
              class="axis"
              color="#7b7b7b"
              fill="#7b7b7b"
              font-size="18"
              font-family="Inter"
              text-anchor="end"
              transform="rotate(270)"
            >
              <text x="-165" y="-43" dy="0.32em" text-anchor="start">
                {{ $t('message.income_and_cost') }}
              </text>
              <text x="-155" y="745" dy="0.32em" text-anchor="start">
                {{ $t('message.cash_and_balance') }}
              </text>
            </g>
            <g
              class="axis"
              transform="translate(0,200)"
              fill="none"
              font-size="14"
              font-family="Inter"
              text-anchor="middle"
            >
              <path class="domain" stroke="#e4e7eb" d="M0,0V0.5H700.0V0"></path>
              <text fill="#7b7b7b" x="-10" dy="0.4em">0</text>
              <text fill="#7b7b7b" x="710" dy="0.4em">0</text>
            </g>
            <g
              class="axis"
              transform="translate(0,150)"
              fill="none"
              font-size="14"
              font-family="Inter"
              text-anchor="middle"
            >
              <path class="domain" stroke="#e4e7eb" d="M0,0V0.5H700.0V0"></path>
              <text fill="#7b7b7b" x="-15" dy="0.4em">.5M</text>
              <text fill="#7b7b7b" x="715" dy="0.4em">50k</text>
            </g>
            <g
              class="axis"
              transform="translate(0,100)"
              fill="none"
              font-size="14"
              font-family="Inter"
              text-anchor="middle"
            >
              <path class="domain" stroke="#e4e7eb" d="M0,0V0.5H700.0V0"></path>
              <text fill="#7b7b7b" x="-15" dy="0.4em">1M</text>
              <text fill="#7b7b7b" x="715" dy="0.4em">100k</text>
            </g>
            <g
              class="axis"
              transform="translate(0,50)"
              fill="none"
              font-size="14"
              font-family="Inter"
              text-anchor="middle"
            >
              <path class="domain" stroke="#e4e7eb" d="M0,0V0.5H700.0V0"></path>
              <text fill="#7b7b7b" x="-15" dy="0.4em">1.5M</text>
              <text fill="#7b7b7b" x="715" dy="0.4em">150k</text>
            </g>
            <g
              class="axis"
              transform="translate(0,0)"
              fill="none"
              font-size="14"
              font-family="Inter"
              text-anchor="middle"
            >
              <path class="domain" stroke="#e4e7eb" d="M0,0V0.5H700.0V0"></path>
              <text fill="#7b7b7b" x="-15" dy="0.4em">2M</text>
              <text fill="#7b7b7b" x="715" dy="0.4em">200k</text>
            </g>
            <g>
              <g transform="translate(15,0)">
                <rect
                  x="19"
                  y="103"
                  width="22"
                  height="97"
                  fill="#67c100"
                ></rect>
                <rect
                  x="41"
                  y="115"
                  width="22"
                  height="85"
                  fill="#ea5959"
                ></rect>
              </g>
              <g transform="translate(130,0)">
                <rect
                  x="19"
                  y="86"
                  width="22"
                  height="114"
                  fill="#67c100"
                ></rect>
                <rect
                  x="41"
                  y="100"
                  width="22"
                  height="100"
                  fill="#ea5959"
                ></rect>
              </g>
              <g transform="translate(245,0)">
                <rect
                  x="19"
                  y="90"
                  width="22"
                  height="110"
                  fill="#67c100"
                ></rect>
                <rect
                  x="41"
                  y="103"
                  width="22"
                  height="97"
                  fill="#ea5959"
                ></rect>
              </g>
              <g transform="translate(360,0)">
                <rect
                  x="19"
                  y="103"
                  width="22"
                  height="97"
                  fill="#67c100"
                ></rect>
                <rect
                  x="41"
                  y="80"
                  width="22"
                  height="120"
                  fill="#ea5959"
                ></rect>
              </g>
              <g transform="translate(475,0)">
                <rect
                  x="19"
                  y="140"
                  width="22"
                  height="60"
                  fill="#67c100"
                ></rect>
                <rect
                  x="41"
                  y="130"
                  width="22"
                  height="70"
                  fill="#ea5959"
                ></rect>
              </g>
              <g transform="translate(590,0)">
                <rect
                  x="19"
                  y="103"
                  width="22"
                  height="97"
                  fill="#67c100"
                ></rect>
                <rect
                  x="41"
                  y="110"
                  width="22"
                  height="90"
                  fill="#ea5959"
                ></rect>
              </g>
            </g>
            <g
              class="axis"
              transform="translate(0,205)"
              fill="none"
              font-size="16"
              font-family="Inter"
              text-anchor="middle"
            >
              <g class="tick" opacity="1" transform="translate(55,0)">
                <text fill="#7b7b7b" y="9" dy="0.71em">
                  {{ $d(getMonth(-4), 'month_only') }}
                </text>
              </g>
              <g class="tick" opacity="1" transform="translate(170,0)">
                <text fill="#7b7b7b" y="9" dy="0.71em">
                  {{ $d(getMonth(-3), 'month_only') }}
                </text>
              </g>
              <g class="tick" opacity="1" transform="translate(285,0)">
                <text fill="#7b7b7b" y="9" dy="0.71em">
                  {{ $d(getMonth(-2), 'month_only') }}
                </text>
              </g>
              <g class="tick" opacity="1" transform="translate(400,0)">
                <text fill="#7b7b7b" y="9" dy="0.71em">
                  {{ $d(getMonth(-1), 'month_only') }}
                </text>
              </g>
              <g class="tick" opacity="1" transform="translate(515,0)">
                <text fill="#7b7b7b" y="9" dy="0.71em">
                  {{ $d(getMonth(0), 'month_only') }}
                </text>
              </g>
              <g class="tick" opacity="1" transform="translate(630,0)">
                <text fill="#7b7b7b" y="9" dy="0.71em">
                  {{ $d(getMonth(1), 'month_only') }}
                </text>
              </g>
            </g>
            <g font-family="Inter" font-size="15" text-anchor="end">
              <g transform="translate(-55,5)">
                <circle cx="170" cy="240" r="5" fill="#67c100"></circle>
                <text fill="#7b7b7b" x="235" y="240" dy="0.32em">
                  {{ $t('message.income') }}
                </text>
                <circle cx="275" cy="240" r="5" fill="#ea5959"></circle>
                <text fill="#7b7b7b" x="320" y="240" dy="0.32em">
                  {{ $t('message.cost') }}
                </text>
                <g transform="translate(365,240)">
                  <line stroke="#3171e1" x2="15"></line>
                  <line stroke="#3171e1" x2="-15"></line>
                  <circle r="5" stroke="#3171e1" fill="#000"></circle>
                  <text fill="#7b7b7b" x="115" dy="0.32em">
                    {{ $t('message.cash_balance') }}
                  </text>
                </g>
                <g transform="translate(520,240)">
                  <line stroke="#3171e1" x2="15" stroke-dasharray="3 3"></line>
                  <line stroke="#3171e1" x2="-15" stroke-dasharray="3 3"></line>
                  <circle r="5" stroke="#3171e1" fill="#000"></circle>
                  <text fill="#7b7b7b" x="135" dy="0.32em">
                    {{ $t('message.cash_predition') }}
                  </text>
                </g>
              </g>
            </g>
            <g stroke="#3171e1" stroke-width="2">
              <line x1="3" y1="147" x2="56" y2="132"></line>
              <line x1="56" y1="132" x2="171" y2="147"></line>
              <line x1="171" y1="147" x2="286" y2="118"></line>
              <line x1="286" y1="118" x2="401" y2="110"></line>
              <line x1="401" y1="110" x2="516" y2="110"></line>
              <line
                x1="516"
                y1="110"
                x2="631"
                y2="90"
                stroke-dasharray="3 3"
              ></line>
              <circle cx="56" cy="132" r="5" fill="#000"></circle>
              <circle cx="171" cy="147" r="5" fill="#000"></circle>
              <circle cx="286" cy="118" r="5" fill="#000"></circle>
              <circle cx="401" cy="110" r="5" fill="#000"></circle>
              <circle cx="516" cy="110" r="5" fill="#000"></circle>
              <circle cx="631" cy="90" r="5" fill="#000"></circle>
            </g>
          </g>
        </svg>
      </section>
      <KeyRates class="flex-1" />
    </div>
  </div>
</template>

<script>
import { mainconfig } from '../../global';
import MashupMainArea from '../MashupMainArea.vue';
import AccountList from '../widgets/AccountList.vue';
import Banner from '../widgets/Banner.vue';
import QuickLinks from '../widgets/QuickLinks.vue';
import RecentActivity from '../widgets/RecentActivity.vue';
import KeyRates from '../widgets/KeyRates.vue';

export default {
  data() {
    return mainconfig;
  },
  components: {
    MashupMainArea,
    AccountList,
    Banner,
    RecentActivity,
    QuickLinks,
    KeyRates,
  },
  methods: {
    getMonth(monthIndex) {
      const myDate = new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        1,
      );
      myDate.setMonth((myDate.getMonth() + monthIndex) % 12);
      return myDate;
    },
  },
};
</script>
