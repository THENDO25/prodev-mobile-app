import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import React from 'react';
import { styles } from '@/styles/joinstyle';

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.iconsection}>
          <Ionicons name="arrow-back" size={25} />
          <Image source={require('@/assets/images/logo-green.png')} />
        </View>
        <View style={styles.titleTextGroup}>
          <Text style={styles.titleText}>Sign in to your Account</Text>
          <Text style={styles.subText}>Enter your email and password to sign in.</Text>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput keyboardType="email-address" style={styles.formControl} />
          <Text style={styles.formLabel}>Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput style={styles.passwordControl} />
            <Ionicons name="eye-off" size={24} color="#7E7B7B" />
          </View>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </View>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>

        <View style={styles.dividerGroup}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.secondaryButtonGroup}>
          <TouchableOpacity style={styles.secondaryButton}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image source={require("@/assets/images/google.png")} />
              <Text style={styles.secondaryButtonText}>Continue with Google</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image source={require("@/assets/images/facebook.png")} />
              <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.signupgroup}>
          <Text style={styles.signupTitleText}>Don't have an account?</Text>
          <Text style={styles.signupSubTitleText}>Join now</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}