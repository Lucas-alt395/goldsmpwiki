# Traade Haven Reservatie

Zie en reserveer een plek!

<script setup>
import { ref, onMounted } from 'vue'

const API_GET = 'https://l-apis.vercel.app/goldsmp/badsystems/havensystem/traade-get-data'
const API_UPDATE = 'https://l-apis.vercel.app/goldsmp/badsystems/havensystem/traade-update-dock'

const docks = ref([])
const loading = ref(true)
const selectedDock = ref('dock-01')
const playerName = ref('')
const fromTime = ref('10:00')
const toTime = ref('12:00')
const statusMessage = ref('')

const fetchDocks = async () => {
  try {
    const res = await fetch(API_GET)
    const data = await res.json()
    if (data.success) {
      docks.value = data.docks
    }
  } catch (err) {
    console.error('Failed to load docks:', err)
  } finally {
    loading.value = false
  }
}

const handleReserve = async () => {
  if (!playerName.value.trim()) {
    statusMessage.value = 'Please enter your in-game name.'
    return
  }

  statusMessage.value = 'Submitting reservation...'
  try {
    const res = await fetch(API_UPDATE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: selectedDock.value,
        reserved: true,
        by: playerName.value,
        from: fromTime.value,
        to: toTime.value
      })
    })

    const data = await res.json()
    if (data.success) {
      statusMessage.value = `Successfully reserved ${selectedDock.value.toUpperCase()}!`
      fetchDocks()
    } else {
      statusMessage.value = 'Error: ' + data.error
    }
  } catch (err) {
    statusMessage.value = 'Failed to submit reservation.'
  }
}

onMounted(() => {
  fetchDocks()
})
</script>

<div class="dock-container">

<h2>Live Dock Status</h2>

<div v-if="loading" class="loading-state">Loading harbor data...</div>

<div v-else class="dock-grid">
<div v-for="dock in docks" :key="dock.id" class="dock-card" :class="{ 'is-reserved': dock.reserved }">
<h3>{{ dock.name }}</h3>
<span class="badge" :class="dock.reserved ? 'badge-red' : 'badge-green'">
{{ dock.reserved ? 'GERESERVEERD' : 'VRIJ' }}
</span>
<div v-if="dock.reserved" class="dock-details">
<p><strong>Gereserveerd door::</strong> {{ dock.by }}</p>
<p><strong>Tijd:</strong> {{ dock.from }} - {{ dock.to }} {{ dock.timezone }}</p>
</div>
<div v-else class="dock-details">
<p>Rate: Zie https://goldsmpwiki.vercel.app/aardappelland/haven_rate voor de rate in Aardappelland</p>
</div>
</div>
</div>

<hr />

<h2>Reserveer een plek</h2>

<div class="reservation-form">
<label>
Selecteer plek:
<select v-model="selectedDock">
<option v-for="dock in docks" :key="dock.id" :value="dock.id">
{{ dock.name }} ({{ dock.reserved ? 'Gereserveerd' : 'Vrij' }})
</option>
</select>
</label>

<label>
Gereserveerd door:
<input type="text" v-model="playerName" placeholder="e.g. lucasbed" />
</label>

<div class="time-inputs">
<label>
Vanaf:
<input type="text" v-model="fromTime" placeholder="10:00" />
</label>
<label>
Tot:
<input type="text" v-model="toTime" placeholder="12:00" />
</label>
</div>

<button @click="handleReserve" class="reserve-btn">Reserveer</button>

<p v-if="statusMessage" class="status-msg">{{ statusMessage }}</p>
</div>

</div>

<style scoped>
.dock-container {
  margin-top: 1.5rem;
}
.dock-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}
.dock-card {
  padding: 1rem;
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
}
.dock-card.is-reserved {
  border-color: #d32f2f;
}
.badge {
  display: inline-block;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-weight: bold;
  font-size: 0.8rem;
  color: #fff;
}
.badge-green { background-color: #388e3c; }
.badge-red { background-color: #d32f2f; }
.dock-details {
  margin-top: 0.8rem;
  font-size: 0.9rem;
}
.reservation-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  background: var(--vp-c-bg-soft);
  padding: 1.5rem;
  border-radius: 8px;
}
.reservation-form label {
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: 0.9rem;
}
.reservation-form input, 
.reservation-form select {
  margin-top: 0.4rem;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}
.time-inputs {
  display: flex;
  gap: 1rem;
}
.reserve-btn {
  background-color: var(--vp-c-brand-1);
  color: #fff;
  font-weight: bold;
  padding: 0.6rem;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  margin-top: 0.5rem;
}
.status-msg {
  font-size: 0.9rem;
  font-weight: bold;
  color: var(--vp-c-brand-1);
}
</style>