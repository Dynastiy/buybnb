<template>
  <div>
    <div class="router_wrap" @click="back">
         
            <ion-icon name="backspace"
          />
        </div>

    <div class="single__user mt-4">
      <section class="left__side">
        <div class="top">
          <div class="">
            <img src="" />
          </div>
          <!-- <div class="mb-4">
            <div class="d-flex align-items-end mb-4">
              <h6>WORK</h6>
              <div class="hr_line"></div>
            </div>
            <div>
              <div class="mb-4">
                <h5 class="work__header font-weight-bold">Department</h5>
                <p class="small"></p>
              </div>
              <div>
                <h5 class="work__header font-weight-bold">Role</h5>
                <p class="small" ></p>
              </div>
            </div>
          </div>
          <div>
            <div class="d-flex align-items-end mb-4">
              <h6>PERMISSIONS</h6>
              <div class="hr_line"></div>
            </div> -->
           
          <!-- </div> -->
        </div>
      </section>

      <section class="right__side">
        <div class="">
          <h4 class="font-weight-bold mb-3">NAME OF USER</h4>
          <div class="mt-4">
            <h6 class="mb-1">User id</h6>
            <p>hdhjd</p>
          </div>
        </div>
        <div class="mb-4">
          <!-- <div class="mt-4">
            <h6 class="mb-1">Level</h6>
            <p >shdhf</p>
          </div> -->
          <!-- <div class="mt-4">
            <h6 class="mb-1">Date Hired</h6>
            <p >hhdds</p>
          </div> -->
        </div>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <a
              class="nav-link active top"
              id="home-tab"
              data-toggle="tab"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Profile
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              class="nav-link top"
              id="profile-tab"
              data-toggle="tab"
              href="#profile"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Financial Details
            </a>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div class="row">
              <div class="mt-4 col-md-6">
                <h6 class="mb-1">email</h6>
                <p >sdjbkfjk</p>
              </div>
              <div class="mt-4 col-md-6">
                <h6 class="mb-1">phone number</h6>
                <p >
                    egfvjdh
                </p>
              </div>
              <div class="mt-4 col-md-12">
                <h6 class="mb-1">address</h6>
                <p >sdfk</p>
              </div>
              <div class="mt-4 col-md-6">
                <h6 class="mb-1">marital status</h6>
                <p >sdjfk</p>
              </div>
              <div class="mt-4 col-md-6">
                <h6 class="mb-1"> religion </h6>
                <p >sdhjdh</p>
              </div>
              <div class="mt-4 col-md-6">
                <h6 class="mb-1">state of origin </h6>
                <p > dhiJKSD</p>
              </div>
              <div class="mt-4 col-md-6">
                <h6 class="mb-1"> lga </h6>
                <p >SDJKLFNL</p>
              </div>
              <div class="mt-4 col-md-6">
                <h6 class="mb-1">next of kin</h6>
                <p >JLEDL</p>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div class="mt-4">
              <h6 class="mb-1">bank name</h6>
              <p > SDJFKJAFK </p>
            </div>
            <div class="mt-4">
              <h6 class="mb-1">account name</h6>
              <p > SDJFK </p>
            </div>
            <div class="mt-4">
              <h6 class="mb-1">account number</h6>
              <p > SKFJL </p>
            </div>
            <div class="mt-4">
              <h6 class="mb-1">wallet address</h6>
              <p > SKFJL </p>
            </div>
          </div>
        </div>
        <!-- <div class="mt-3 d-flex" style="gap: 15px">
          <button class="activate">Activate Staff</button>
          <button class="de_activate" > Deactivate User </button>
          <button class="ban"  > Ban Staff </button>
          <button class="unban">Unban Staff</button>
        </div> -->
      </section>
    </div>
  </div>
</template>

