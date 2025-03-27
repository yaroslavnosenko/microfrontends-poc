import { Component, OnInit } from '@angular/core';
import { DemoService } from './demo.service';

@Component({
  selector: 'demo',
  template: `
    <div class="container">
      <!-- Main Content -->
      <main class="main-content">
        <!-- Header -->
        <header class="header">
          <h1>Angular Dashboard</h1>
        </header>

        <!-- Stats Section -->
        <section class="stats">
          <div class="stat-card">
            <h2>Total Patients</h2>
            <p>1,245</p>
          </div>
          <div class="stat-card">
            <h2>Upcoming Appointments</h2>
            <p>25</p>
          </div>
          <div class="stat-card">
            <h2>Surgeries Completed</h2>
            <p>74</p>
          </div>
        </section>

        <!-- Recent Appointments -->
        <section class="appointments">
          <h2>Recent Appointments</h2>
          <table class="appointments-table">
            <thead>
              <tr>
                <th>Patient</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>March 28, 2025</td>
                <td><span class="status confirmed">Confirmed</span></td>
                <td><button class="view-btn">View</button></td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>April 1, 2025</td>
                <td><span class="status pending">Pending</span></td>
                <td><button class="view-btn">View</button></td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  `,
  styles: [
    `
      /* Global Styles */
      .container {
        display: flex;
        height: 100vh;
      }

      .logo {
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 20px;
        border-bottom: 1px solid #e5e5e5;
        padding-bottom: 10px;
      }

      .nav-link {
        display: block;
        padding: 10px 15px;
        color: #333;
        text-decoration: none;
        border-radius: 5px;
        margin-bottom: 5px;
      }

      .nav-link:hover {
        background-color: #f3f4f6;
      }

      /* Main Content */
      .main-content {
        flex-grow: 1;
        overflow-y: auto;
        padding: 24px;
      }

      /* Header */
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 20px;
        margin-bottom: 20px;
        border-radius: 10px;
        border: 1px solid oklch(.967 .003 264.542);
      }

      .header h1 {
        font-size: 24px;
        font-weight: bold;
      }

      .header-actions {
        display: flex;
        align-items: center;
      }

      /* Stats Section */
      .stats {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
        margin-bottom: 20px;
      }

      .stat-card {
        background-color: #fff;
        padding: 20px;
        border-radius: 10px;
        border: 1px solid oklch(.967 .003 264.542);
      }

      .stat-card h2 {
        font-size: 18px;
        font-weight: bold;
      }

      .stat-card p {
        font-size: 24px;
        margin-top: 5px;
      }

      /* Appointments Section */
      .appointments {
        background-color: #fff;
        padding: 20px;
        border-radius: 10px;
        border: 1px solid oklch(.967 .003 264.542);
      }

      .appointments h2 {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 15px;
      }

      .appointments-table {
        width: 100%;
        border-collapse: collapse;
      }

      .appointments-table th,
      .appointments-table td {
        padding: 10px;
        border-bottom: 1px solid #e5e5e5;
        text-align: left;
      }

      .status {
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 12px;
      }

      .status.confirmed {
        background-color: #d1fae5;
        color: #10b981;
      }

      .status.pending {
        background-color: #fef3c7;
        color: #f59e0b;
      }

      .view-btn {
        background-color: #3b82f6;
        color: white;
        padding: 5px 10px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
      }

      /* Count Button */
      .counter {
        margin-top: 20px;
      }

      .count-btn {
        background-color: #22c55e;
        color: white;
        padding: 8px 12px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
      }

      .count-btn:hover {
        background-color: #16a34a;
      }
    `,
  ],
})
export class DemoComponent implements OnInit {
  constructor(public service: DemoService) {}

  ngOnInit(): void {}

  event: Event;
}
