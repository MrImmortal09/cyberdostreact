import React from 'react';

const Sidebar = () => {
  return (
    <div id="side">
      <div class="side-section growing-communities">
                <div class="section-head">
                    <span class="title">Today's Top Growing Communities</span>
                </div>
                <div class="side-element">
                    <span class="number">1</span>
                    <i class="fas fa-sort-up"></i>
                    <i class="far fa-user-circle"></i>
                    <span class="name">r/randomUser</span>
                </div>
                <div class="side-element">
                    <span class="number">2</span>
                    <i class="fas fa-sort-up"></i>
                    <i class="far fa-user-circle"></i>
                    <span class="name">r/randomUser</span>
                </div>
                <div class="side-element">
                    <span class="number">3</span>
                    <i class="fas fa-sort-up"></i>
                    <i class="far fa-user-circle"></i>
                    <span class="name">r/randomUser</span>
                </div>
                <div class="side-element">
                    <span class="number">4</span>
                    <i class="fas fa-sort-up"></i>
                    <i class="far fa-user-circle"></i>
                    <span class="name">r/randomUser</span>
                </div>
                <div class="view-all">View All</div>
                <div class="buttons">
                    <div class="sports">Sports</div>
                    <div class="news">News</div>
                    <div class="gaming">Gaming</div>
                    <div class="aww">Aww</div>
                </div>
            </div>
            
           
            <div id="side_footer" class="side-section">
                <div id="left_list">
                    <ul>
                        <li>Help</li>
                        <li>Forum App</li>
                        <li>Forum Coins</li>
                        <li>Forum Premium</li>
                        <li>Forum Gifts</li>
                        <li>Communities</li>
                        <li>Top Posts</li>
                        <li>Topics</li>
                    </ul>
                </div>
                <span>Made to help on global front</span>
            </div>
    </div>
  );
};

export default Sidebar;