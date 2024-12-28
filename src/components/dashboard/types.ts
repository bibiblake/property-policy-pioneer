/**
 * Common types used across dashboard components
 */

/**
 * Represents a policy in the system
 */
export interface Policy {
  /** Unique identifier for the policy */
  id: number;
  /** Name of the policy */
  name: string;
  /** Associated property name */
  property: string;
  /** Expiration date in ISO format */
  expiryDate: string;
  /** Number of days until policy expires */
  daysUntilExpiry: number;
}

/**
 * Represents an activity item in the system
 */
export interface Activity {
  /** Unique identifier for the activity */
  id: number;
  /** Type of activity (e.g., 'policy_renewed', 'claim_filed') */
  type: string;
  /** Description of the activity */
  description: string;
  /** Associated property name */
  property: string;
  /** Human-readable timestamp */
  timestamp: string;
  /** Icon component to display */
  icon: React.ElementType;
}

/**
 * Represents a data point in cost charts
 */
export interface CostDataPoint {
  /** Month or period name */
  name: string;
  /** Premium amount */
  premium: number;
  /** Claims amount */
  claims: number;
}

/**
 * Represents a policy distribution data point
 */
export interface PolicyDistributionData {
  /** Type of policy */
  name: string;
  /** Percentage or count value */
  value: number;
}