import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function StudentDashboard() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-[#FDFDFD]">
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        
        <View className="flex-row items-center justify-between px-4 py-3">
          <View className="flex-row items-center">
            <View className="relative">
              <Text className="text-[#F37021] text-[22px] font-bold tracking-tighter">             
              </Text>
            </View>
          </View>

          <View className="flex-1 px-4">
            <View className="flex-row items-center border border-gray-200 rounded-lg px-3 py-1.5 shadow-sm bg-white">
              <Feather name="search" size={14} color="#9CA3AF" />
              <TextInput 
                placeholder="Search courses, assignments..."
                placeholderTextColor="#9CA3AF"
                className="flex-1 ml-2 text-[12px] text-gray-800 p-0"
              />
            </View>
          </View>

          <View className="flex-row items-center">
            <TouchableOpacity className="mr-3 relative">
              <Feather name="bell" size={18} color="#4B5563" />
            </TouchableOpacity>
            <Image
              className="w-8 h-8 rounded-full bg-[#f37021]"
              source={{ uri: 'https://i.pravatar.cc/100?img=11' }}
            />
          </View>
        </View>

        <View className="px-4 mt-4 mb-6">
          <Text className="text-[24px] font-medium text-gray-800 tracking-tight">Dashboard</Text>
          <Text className="text-[14px] text-gray-500 mt-1">
            Welcome Philip stanton
          </Text>
        </View>

        <View className="mb-6">
          <View className="flex-row items-center justify-between px-4 mb-4">
            <Text className="text-[18px] font-medium text-gray-800">Recent enrolled courses</Text>
            <TouchableOpacity className="border border-gray-200 bg-white px-3 py-1.5 rounded-lg shadow-sm">
              <Text className="text-[13px] text-gray-600 font-medium">View all</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pl-4">
            
            <View className="w-[300px] h-[130px] bg-[#D6EBE4] rounded-[22px] p-5 mr-3 overflow-hidden justify-between">
              <View className="absolute top-2 right-4 w-6 h-6 border-[3px] border-white/40 rounded-sm" style={{transform:[{rotate: '45deg'}]}} />
              <View className="absolute top-10 right-16 w-3 h-3 border-[2px] border-white/40 rounded-sm" style={{transform:[{rotate: '20deg'}]}} />
              <View className="absolute bottom-[-15px] right-[-15px] w-24 h-24 bg-white/30 rounded-full" />
              <View className="absolute bottom-[-25px] right-[40px] w-12 h-12 bg-white/30 rounded-xl" style={{transform:[{rotate: '-15deg'}]}} />
              
              <Text className="text-[15px] font-semibold text-gray-800 leading-snug w-[80%]">
                AM101 -AI / ML Frontier AI Engineer
              </Text>
              
              <View className="flex-row items-center">
                <View className="flex-row items-center bg-white/60 px-2 py-1 rounded-lg">
                  <Feather name="clock" size={12} color="#6b7280" />
                  <Text className="text-[11px] text-gray-700 ml-1.5 font-medium">3 Months</Text>
                </View>
                <View className="flex-row items-center bg-white/60 px-2 py-1 rounded-lg ml-3">
                  <Feather name="file-text" size={12} color="#6b7280" />
                  <Text className="text-[11px] text-gray-700 ml-1.5 font-medium">05 Lessons</Text>
                </View>
              </View>
            </View>

            <View className="w-[300px] h-[130px] bg-[#DBCBE7] rounded-[22px] p-5 mr-3 overflow-hidden justify-between">
              <View className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16" />
              <Text className="text-[15px] font-semibold text-gray-800 leading-snug w-[80%]">
                SS102 - System Architecture
              </Text>
              
              <View className="flex-row items-center">
                <View className="flex-row items-center bg-white/60 px-2 py-1 rounded-lg">
                  <Feather name="clock" size={12} color="#6b7280" />
                  <Text className="text-[11px] text-gray-700 ml-1.5 font-medium">3 Months</Text>
                </View>
              </View>
            </View>
            <View className="w-4" />
          </ScrollView>
        </View>

        <View className="px-4 mb-6">
          <View className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100/50">
            <View className="flex-row justify-between items-center mb-6">
              <Text className="text-[18px] font-medium text-gray-800">Classes</Text>
              <TouchableOpacity>
                <Feather name="info" size={20} color="#4B5563" />
              </TouchableOpacity>
            </View>

            <View className="flex-row items-center justify-between mb-8 ml-2">
              <View>
                <Text className="text-gray-500 text-[15px] mb-1">Attended</Text>
                <Text className="text-[20px] font-bold text-gray-800">21 / 38</Text>
              </View>
              
              <View className="relative w-36 h-36 items-center justify-center mr-4">
                <View className="w-full h-full rounded-full border-[22px] border-gray-100" />
                
                <View className="absolute w-full h-full rounded-full border-[22px] border-[#10B981] border-l-transparent border-t-transparent" style={{ transform: [{ rotate: '45deg' }] }} />
                <View className="absolute w-full h-full rounded-full border-[22px] border-[#10B981] border-r-transparent border-b-transparent" style={{ transform: [{ rotate: '45deg' }] }} />
                <View className="absolute w-full h-full rounded-full border-[22px] border-[#10B981] border-l-transparent border-t-transparent" style={{ transform: [{ rotate: '-45deg' }] }} />
                
                <View className="absolute left-[0px] bottom-6 w-7 h-7 bg-[#E11D48] rounded-full" />
                
                <View className="absolute items-center justify-center bg-white w-[100px] h-[100px] rounded-full">
                  <Text className="text-[20px] font-medium text-gray-600">65%</Text>
                </View>
              </View>
            </View>

            <View className="flex-row justify-between items-center px-1">
              <View className="flex-row items-center">
                <View className="w-3.5 h-3.5 rounded-sm bg-[#10B981] mr-2" />
                <Text className="text-[13px] text-gray-600">Attended: 21</Text>
              </View>
              <View className="flex-row items-center">
                <View className="w-3.5 h-3.5 rounded-sm bg-[#E11D48] mr-2" />
                <Text className="text-[13px] text-gray-600">Absent: 04</Text>
              </View>
              <View className="flex-row items-center">
                <View className="w-3.5 h-3.5 rounded-sm bg-gray-200 mr-2" />
                <Text className="text-[13px] text-gray-600">Upcoming: 13</Text>
              </View>
            </View>
          </View>
        </View>

        <View className="px-4 mb-6">
          <View className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100/50">
            <View className="flex-row justify-between items-center mb-6">
              <Text className="text-[18px] font-medium text-gray-800">Recording</Text>
              <TouchableOpacity>
                <Feather name="info" size={20} color="#4B5563" />
              </TouchableOpacity>
            </View>

            <Text className="text-[18px] font-medium text-gray-800 mb-5">
              You missed a class yesterday
            </Text>

            <Text className="text-[14px] text-gray-600 mb-6 font-medium">
              AI / ML Live Class – Neural Networks
            </Text>

            <View className="flex-row items-center mb-8">
              <View className="flex-row items-center mr-8">
                <View className="w-6 h-6 bg-gray-50 rounded-md items-center justify-center mr-2 border border-gray-100">
                  <Feather name="calendar" size={12} color="#6B7280" />
                </View>
                <Text className="text-[13px] text-gray-500 font-medium">Jan 14, 26</Text>
              </View>

              <View className="flex-row items-center">
                <View className="w-6 h-6 bg-gray-50 rounded-md items-center justify-center mr-2 border border-gray-100">
                  <Feather name="clock" size={12} color="#6B7280" />
                </View>
                <Text className="text-[13px] text-gray-500 font-medium">01 hr 10m</Text>
              </View>
            </View>

            <TouchableOpacity className="bg-[#ea580c] py-4 rounded-[16px] items-center shadow-sm">
              <Text className="text-white font-medium text-[15px]">Watch Recording</Text>
            </TouchableOpacity>
          </View>
        </View>



        <View className="px-4 pb-12 mt-2">
          <View className="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100/50">
            <View className="flex-row items-center justify-between mb-5">
              <View>
                <Text className="text-[20px] font-medium text-gray-800 tracking-tight">Assignments</Text>
                <Text className="text-[14px] text-gray-500 mt-1">Friday, 15 Jan, 2024</Text>
              </View>
              <TouchableOpacity 
                onPress={() => router.push('/student-flow/assignments')} 
                className="border border-gray-200 bg-white px-4 py-2 rounded-[12px]"
              >
                <Text className="text-[12px] text-gray-600 font-medium">View all</Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row justify-between mb-8">
              <View className="w-10 h-11 bg-[#FFF3EC] rounded-full items-center justify-center">
                <Text className="text-[10px] text-[#ea580c] mb-0.5 font-medium">Sun</Text>
                <Text className="text-[12px] font-semibold text-[#ea580c]">10</Text>
              </View>
              <View className="w-10 h-11 bg-[#DCFCE7] rounded-full items-center justify-center">
                <Text className="text-[10px] text-[#16A34A] mb-0.5 font-medium">Mon</Text>
                <Text className="text-[12px] font-semibold text-[#16A34A]">11</Text>
              </View>
              <View className="w-10 h-11 bg-[#DCFCE7] rounded-full items-center justify-center">
                <Text className="text-[10px] text-[#16A34A] mb-0.5 font-medium">Tue</Text>
                <Text className="text-[12px] font-semibold text-[#16A34A]">12</Text>
              </View>
              <View className="w-10 h-11 bg-[#DCFCE7] rounded-full items-center justify-center">
                <Text className="text-[10px] text-[#16A34A] mb-0.5 font-medium">Wed</Text>
                <Text className="text-[12px] font-semibold text-[#16A34A]">13</Text>
              </View>
              <View className="w-10 h-11 bg-[#FEE2E2] rounded-full items-center justify-center">
                <Text className="text-[10px] text-[#DC2626] mb-0.5 font-medium">Thu</Text>
                <Text className="text-[12px] font-semibold text-[#DC2626]">14</Text>
              </View>
              <View className="w-10 h-11 bg-[#FAE8FF] rounded-full items-center justify-center">
                <Text className="text-[10px] text-[#D946EF] mb-0.5 font-medium">Fri</Text>
                <Text className="text-[12px] font-semibold text-[#D946EF]">15</Text>
              </View>
              <View className="w-10 h-11 bg-white border border-gray-100 rounded-full items-center justify-center shadow-sm">
                <Text className="text-[10px] text-gray-500 mb-0.5 font-medium">Sat</Text>
                <Text className="text-[12px] font-semibold text-gray-800">16</Text>
              </View>
            </View>

            <View className="flex-row items-center justify-between mb-8">
              <TouchableOpacity className="bg-[#ea580c] px-4 py-2 rounded-[12px] shadow-sm flex-1 mr-2 items-center">
                <Text className="text-white text-[12px] font-medium">All</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-white px-3 py-2 rounded-[12px] border border-gray-100 flex-1 mr-2 items-center">
                <Text className="text-gray-500 text-[12px] font-medium">In Progress</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-white px-3 py-2 rounded-[12px] border border-gray-100 flex-1 mr-2 items-center">
                <Text className="text-gray-500 text-[12px] font-medium">Completed</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-white px-3 py-2 rounded-[12px] border border-gray-100 flex-1 items-center">
                <Text className="text-gray-500 text-[12px] font-medium">Over Due</Text>
              </TouchableOpacity>
            </View>

            <View className="mb-6">
              <View className="flex-row items-start justify-between mb-3">
                <Text className="text-[14px] font-semibold text-gray-800 leading-snug flex-1 mr-4">
                  AM101 - AI / ML Frontier Ai Engineer
                </Text>
                <View className="bg-[#FFF3EC] px-3 py-1.5 rounded-[10px] border border-orange-50 mt-1">
                  <Text className="text-[#ea580c] text-[11px] font-medium">In progress</Text>
                </View>
              </View>
              
              <View className="flex-row items-center mb-1.5">
                <Feather name="clipboard" size={12} color="#9CA3AF" />
                <Text className="text-[12px] text-gray-500 ml-2">Due date: Jan 17, 26</Text>
              </View>
              <View className="flex-row items-center">
                <Feather name="clock" size={12} color="#9CA3AF" />
                <Text className="text-[12px] text-gray-500 ml-2">Due time: 9:00 - 10:00 am</Text>
              </View>
            </View>

            <View>
              <View className="flex-row items-start justify-between mb-3">
                <Text className="text-[14px] font-semibold text-gray-800 leading-snug flex-1 mr-4">
                  SS102 - System and Software System Pro
                </Text>
                <View className="bg-[#DCFCE7] px-3 py-1.5 rounded-[10px] border border-green-50 mt-1">
                  <Text className="text-[#16A34A] text-[11px] font-medium">Completed</Text>
                </View>
              </View>
              
              <View className="flex-row items-center mb-1.5">
                <Feather name="clipboard" size={12} color="#9CA3AF" />
                <Text className="text-[12px] text-gray-500 ml-2">Due date: Jan 15, 26</Text>
              </View>
              <View className="flex-row items-center">
                <Feather name="clock" size={12} color="#9CA3AF" />
                <Text className="text-[12px] text-gray-500 ml-2">Due time: 9:00 - 10:00 am</Text>
              </View>
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
